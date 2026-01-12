import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 150px;
  left: 150px;
  z-index: 100;

  width: 320px;
  height: 460px;

  background: #1c1c1c;
  border-radius: 12px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);

  user-select: none;

  display: flex;
  flex-direction: column;
  overflow: hidden; /* 🔒 IMPORTANT */
`;


/* ================= HEADER ================= */
export const Header = styled.div`
  position: absolute;
  top: 0;
  height: 40px;
  width: 100%;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

/* ================= BUTTONS ================= */
export const Buttons = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;

  display: flex;
  gap: 6px;
  z-index: 2;

  span {
    position: relative;
    width: 14px;
    height: 14px;
  }

  span svg:first-child {
    display: none;
    position: absolute;
    font-size: 10px;
    top: 2px;
    left: 2px;
  }

  span:first-child svg:last-child {
    color: #ff5f56;
  }

  span:nth-child(2) svg:last-child {
    color: #ffbd2e;
  }

  span:last-child svg:last-child {
    color: #27c93f;
  }

  &:hover span svg:first-child {
    display: block;
    color: #000;
  }
`;

/* ================= DISPLAY ================= */
export const Display = styled.div`
  height: 120px;
  padding: 20px;
  text-align: right;

  font-size: 48px;
  color: white;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

/* ================= KEYPAD ================= */
export const Keypad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 16px;
`;

/* ================= KEY ================= */
export const Key = styled.button`
  height: 60px;
  border-radius: 50%;
  border: none;
  font-size: 22px;

  background: #333;
  color: white;
  cursor: pointer;

  &.operator {
    background: #ff9500;
    color: white;
  }

  &.light {
    background: #a5a5a5;
    color: black;
  }

  &.zero {
    grid-column: span 2;
    border-radius: 40px;
    text-align: left;
    padding-left: 24px;
  }

  &:active {
    filter: brightness(1.2);
  }
`;
