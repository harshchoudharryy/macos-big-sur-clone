import styled from "styled-components";

/* =========================
   ROOT WINDOW
========================= */
export const Window = styled.div`
  position: fixed;
  top: 120px;
  left: 180px;

  width: 920px;
  height: 580px;
  min-width: 760px;
  min-height: 480px;

  background: #121212;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  z-index: 120;

  /* Spotify depth stack */
  box-shadow:
    0 32px 72px rgba(0, 0, 0, 0.85),
    0 2px 0 rgba(255, 255, 255, 0.03) inset,
    0 0 0 1px rgba(255, 255, 255, 0.035);

  font-family: "Circular Std", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  /* Inactive window dim */
  &[data-inactive="true"] {
    opacity: 0.92;
    filter: saturate(0.95);
  }

  /* Smooth open animation */
  animation: windowIn 0.25s ease-out;

  @keyframes windowIn {
    from {
      transform: scale(0.96) translateY(12px);
      opacity: 0;
    }
    to {
      transform: none;
      opacity: 1;
    }
  }
`;

/* =========================
   HEADER / TITLE BAR
========================= */
export const WindowHeader = styled.div`
  height: 44px;
  padding-right: 14px;

  background:
    linear-gradient(
      180deg,
      rgba(42, 42, 42, 0.96),
      rgba(28, 28, 28, 0.96)
    );

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  user-select: none;
  cursor: grab;

  box-shadow:
    inset 0 -1px rgba(255, 255, 255, 0.035);

  &:active {
    cursor: grabbing;
  }

  /* Subtle Spotify noise */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;

    background-image: radial-gradient(
      rgba(255, 255, 255, 0.02) 1px,
      transparent 0
    );
    background-size: 3px 3px;
    opacity: 0.35;
  }
`;

/* =========================
   macOS WINDOW BUTTONS
========================= */
export const Buttons = styled.div`
  display: flex;
  gap: 8px;
  padding-left: 14px;
  z-index: 2;

  span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;

    box-shadow:
      inset 0 0 0 1px rgba(0, 0, 0, 0.35),
      0 1px 1px rgba(0, 0, 0, 0.55);

    transition: filter 0.12s ease;
  }

  span:hover {
    filter: brightness(1.08);
  }

  span:active {
    filter: brightness(0.9);
  }

  span:nth-child(1) { background: #ff5f57; }
  span:nth-child(2) { background: #febc2e; }
  span:nth-child(3) { background: #28c840; }

  span::after {
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    line-height: 1;
    color: rgba(0, 0, 0, 0.7);

    opacity: 0;
    transform: scale(0.9);
    transition: all 0.12s ease;
  }

  span:nth-child(1)::after {
    content: "×";
    font-size: 10px;
  }

  span:nth-child(2)::after {
    content: "–";
    font-size: 14px;
    margin-top: -1px;
  }

  span:nth-child(3)::after {
    content: "⤢";
    font-size: 9px;
  }

  &:hover span::after {
    opacity: 1;
    transform: scale(1);
  }
`;

/* =========================
   WINDOW BODY
========================= */
export const WindowBody = styled.div`
  flex: 1;
  display: flex;

  background: linear-gradient(
    180deg,
    rgba(18, 18, 18, 1),
    rgba(15, 15, 15, 1)
  );
`;

/* =========================
   SIDEBAR (ACCURATE WIDTH)
========================= */
export const Sidebar = styled.div`
  width: 240px;
  background: #000;
  padding: 12px 8px;

  display: flex;
  flex-direction: column;

  box-shadow:
    inset -1px 0 rgba(255, 255, 255, 0.04);
`;

/* =========================
   MAIN PANEL
========================= */
export const MainPanel = styled.div`
  flex: 1;
  background: #121212;

  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.03);

  overflow-y: auto;
`;
