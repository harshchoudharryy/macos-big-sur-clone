import styled from "styled-components";

/* ======================
   APP CONTAINER
====================== */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #121212;
  color: white;
`;

/* ======================
   HEADER
====================== */
export const Header = styled.div`
  padding: 48px 32px;
  background: linear-gradient(180deg, #3a1d5c, #121212 80%);
`;

export const Greeting = styled.h2`
  font-size: 32px;
  font-weight: 800;
`;

/* ======================
   LAYOUT
====================== */
export const Body = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

/* ======================
   SIDEBAR
====================== */
export const Sidebar = styled.aside`
  width: 280px;
  background: #000;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: inset -1px 0 rgba(255, 255, 255, 0.04);
`;

export const Logo = styled.h1`
  font-size: 22px;
  font-weight: 800;
  color: #1db954;
  padding-left: 12px;
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MenuItem = styled.div<{ active?: boolean }>`
  height: 44px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 16px;

  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;

  color: ${({ active }) => (active ? "#fff" : "#b3b3b3")};
  background: ${({ active }) => (active ? "#1a1a1a" : "transparent")};

  position: relative;
  transition: background 0.2s, color 0.2s;

  ${({ active }) =>
    active &&
    `
    &::before{
      content:"";
      position:absolute;
      left:0;
      top:6px;
      bottom:6px;
      width:4px;
      background:#1db954;
      border-radius:2px;
    }
  `}

  &:hover {
    background: #1a1a1a;
    color: white;
  }
`;

/* ======================
   MAIN CONTENT
====================== */
export const Main = styled.main`
  flex: 1;
  overflow-y: auto;
`;

export const Songs = styled.div`
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
`;

export const SongCard = styled.div<{ active: boolean }>`
  background: ${({ active }) => (active ? "#242424" : "#181818")};
  padding: 16px;
  border-radius: 12px;
  position: relative;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #242424;
    transform: translateY(-6px);
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 12px;
    user-select: none;
  }
`;

export const PlayButton = styled.button`
  position: absolute;
  right: 16px;
  bottom: 92px;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #1db954;
  border: none;
  font-size: 18px;
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transform: translateY(12px);
  transition: 0.25s ease;
  cursor: pointer;

  ${SongCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: scale(1.08);
  }
`;

/* ======================
   PLAYER BAR
====================== */
export const PlayerBar = styled.div`
  height: 90px;
  background: #181818;
  border-top: 1px solid #282828;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;

  padding: 0 24px;
`;

/* LEFT */
export const PlayerLeft = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
    border-radius: 4px;
    user-select: none;
  }

  span {
    font-size: 12px;
    color: #b3b3b3;
  }
`;

/* CENTER */
export const PlayerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  button {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #1db954;
    border: none;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

/* ======================
   SEEK BAR
====================== */
export const SeekBar = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 11px;
    color: #b3b3b3;
    width: 40px;
    text-align: center;
  }

  input[type="range"] {
    flex: 1;
    height: 4px;
    appearance: none;
    background: #404040;
    border-radius: 2px;
    cursor: pointer;

    &::-webkit-slider-thumb {
      appearance: none;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #1db954;
      opacity: 0;
      transition: 0.2s;
    }

    &:hover::-webkit-slider-thumb {
      opacity: 1;
    }
  }
`;

/* RIGHT */
export const PlayerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

/* ======================
   VOLUME BAR
====================== */
export const VolumeBar = styled.input`
  width: 120px;
  height: 4px;
  appearance: none;
  background: #404040;
  border-radius: 2px;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #1db954;
  }
`;
