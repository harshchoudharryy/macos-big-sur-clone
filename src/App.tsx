import { styled } from "styled-components";
import { Navbar, Dock, Setting } from "./components";
import { useWallpaper } from "./library/useWallpaperStore";
import { useSettingStore } from "./library/useSettingStore";
import { useFinderStore } from "./library/useFinderStore";
import { FinderWindow } from "./components/Finder/FinderWindow";
import { Calculator } from "./components/calculator/Calculator";
import { useCalculatorStore } from "./library/useCalculatorStore";
import { Spotify } from "./components/spotify/Spotify"
import { useSpotifyStore } from "./library/useSpotifyStore";




/* =======================
   STYLED COMPONENTS
======================= */

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Background = styled.div<{ $bg: string }>`
  z-index: -2;
  position: absolute;
  inset: 0;
  background: url(${(p) => p.$bg}) no-repeat center / cover;
`;

const DockWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 95%;
`;

const Folder = styled.img`
  top: 50px;
  right: 50px;
  position: absolute;
  width: 70px;
  cursor: pointer;
  user-select: none;
  z-index: 10; /* MUST be positive */
`;

/* =======================
   APP COMPONENT
======================= */



export default function App() {
  const { wallpaper } = useWallpaper();
  const { isSettingOpen } = useSettingStore();
  const { isFinderOpen, openFinder } = useFinderStore();
  const { isCalculatorOpen } = useCalculatorStore();
  const { isSpotifyOpen } = useSpotifyStore();

  return (
    <Container>
      <Navbar />

      {/* Desktop Folder */}
      
      <Folder
  src="/folder.png"
  tabIndex={0}
  onDoubleClick={() => {
    openFinder();
  }}
/>


      {/* Windows */}
      {isSettingOpen && <Setting />}


      
      {isFinderOpen && <FinderWindow />}
      {isCalculatorOpen && <Calculator />}

      {isSpotifyOpen && <Spotify />}

      {/* Dock */}
      <DockWrapper>
        <Dock />
      </DockWrapper>

      {/* Wallpaper */}
      <Background $bg={wallpaper} />
    </Container>
  );
}
