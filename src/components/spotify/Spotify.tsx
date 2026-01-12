import { useRef, useEffect, useState } from "react";
import { useSpotifyStore } from "../../library/useSpotifyStore";
import {
  Container, Header, Greeting, Body,
  Sidebar, Logo, Menu, MenuItem,
  Main, Songs, SongCard, PlayButton,
  PlayerBar, PlayerLeft, PlayerCenter, PlayerRight,
  SeekBar, VolumeBar
} from "./SpotifyStyle";
import { Window, WindowHeader, Buttons } from "./SpotifyWindowStyle";

/* ----------------------------------
   SONG DATA
-----------------------------------*/
const songs = [
  {
    title: "Peeche Tere Aawan",
    artist: "Lo-Fi Romance",
    cover: "https://picsum.photos/300?1",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Tera Intezaar",
    artist: "Soulful Beats",
    cover: "https://picsum.photos/300?2",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
];

/* ----------------------------------
   UTILS
-----------------------------------*/
const formatTime = (time: number) => {
  if (!time || isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

/* ----------------------------------
   COMPONENT
-----------------------------------*/
export function Spotify() {
  const { closeSpotify } = useSpotifyStore();
  const audioRef = useRef<HTMLAudioElement>(null);

  /* ----------------------------------
     PLAYER STATE
  -----------------------------------*/
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  /* ----------------------------------
     SEEK STATE
  -----------------------------------*/
  const [isSeeking, setIsSeeking] = useState(false);

  const currentSong = songs[currentIndex];

  /* ----------------------------------
     PLAY / PAUSE
  -----------------------------------*/
  const togglePlay = (index?: number) => {
    if (!audioRef.current) return;

    // If clicking a different song
    if (index !== undefined && index !== currentIndex) {
      setCurrentIndex(index);
      setPlaying(true);
      return;
    }

    setPlaying(prev => !prev);
  };

  /* ----------------------------------
     NEXT / PREVIOUS
  -----------------------------------*/
  const nextSong = () => {
    setCurrentIndex(i => (i + 1) % songs.length);
    setPlaying(true);
  };

  const prevSong = () => {
    setCurrentIndex(i =>
      i === 0 ? songs.length - 1 : i - 1
    );
    setPlaying(true);
  };

  /* ----------------------------------
     AUDIO SIDE EFFECTS
  -----------------------------------*/
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (!audioRef.current) return;
    playing
      ? audioRef.current.play()
      : audioRef.current.pause();
  }, [playing, currentIndex]);

  /* ----------------------------------
     RENDER
  -----------------------------------*/
  return (
    <Window>
      <WindowHeader>
        <Buttons>
          <span onClick={closeSpotify} />
          <span />
          <span />
        </Buttons>
      </WindowHeader>

      <Container>
        <Header>
          <Greeting>Good Evening, Harsh ❤️</Greeting>
        </Header>

        <Body>
          <Sidebar>
            <Logo>Spotify</Logo>
            <Menu>
              <MenuItem active>🏠 Home</MenuItem>
              <MenuItem>🔍 Search</MenuItem>
              <MenuItem>🎵 Your Library</MenuItem>
            </Menu>
          </Sidebar>

          <Main>
            <Songs>
              {songs.map((song, index) => {
                const active = index === currentIndex;

                return (
                  <SongCard key={song.title} active={active}>
                    <img src={song.cover} alt={song.title} />
                    <h4>{song.title}</h4>
                    <p>{song.artist}</p>

                    <PlayButton onClick={() => togglePlay(index)}>
                      {active && playing ? "⏸" : "▶"}
                    </PlayButton>
                  </SongCard>
                );
              })}
            </Songs>
          </Main>
        </Body>

        {/* ----------------------------------
            PLAYER BAR
        -----------------------------------*/}
        <PlayerBar>
          <PlayerLeft>
            <img src={currentSong.cover} alt={currentSong.title} />
            <div>
              <strong>{currentSong.title}</strong>
              <span>{currentSong.artist}</span>
            </div>
          </PlayerLeft>

          <PlayerCenter>
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={prevSong}>⏮</button>
              <button onClick={() => togglePlay()}>
                {playing ? "⏸" : "▶"}
              </button>
              <button onClick={nextSong}>⏭</button>
            </div>

            <SeekBar>
              <span>{formatTime(time)}</span>

              {/* ✅ CORRECT SEEK BAR */}
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.01}
                value={time}

                onPointerDown={() => {
                  setIsSeeking(true);
                }}

                onPointerMove={e => {
                  if (!isSeeking || !audioRef.current) return;
                  const value = +(e.target as HTMLInputElement).value;
                  setTime(value);
                  audioRef.current.currentTime = value;
                }}

                onPointerUp={e => {
                  if (!audioRef.current) return;
                  const value = +(e.target as HTMLInputElement).value;
                  audioRef.current.currentTime = value;
                  setIsSeeking(false);
                }}
              />

              <span>{formatTime(duration)}</span>
            </SeekBar>
          </PlayerCenter>

          <PlayerRight>
            🔊
            <VolumeBar
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={e => setVolume(+e.target.value)}
            />
          </PlayerRight>

          {/* ----------------------------------
              AUDIO ELEMENT
          -----------------------------------*/}
          <audio
            ref={audioRef}
            src={currentSong.url}
            onLoadedMetadata={e =>
              setDuration(e.currentTarget.duration)
            }
            onTimeUpdate={e => {
              if (!isSeeking) {
                setTime(e.currentTarget.currentTime);
              }
            }}
            onEnded={nextSong}
          />
        </PlayerBar>
      </Container>
    </Window>
  );
}
