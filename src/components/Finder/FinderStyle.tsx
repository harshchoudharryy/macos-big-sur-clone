import styled from "styled-components";
import { lightTextColor } from "../../library/constant";

/* ================= MODAL ================= */

export const Modal = styled.div<{ $themeColor: string }>`
  position: fixed;
  top: 120px;
  left: 120px;

  width: 500px;
  height: 520px;

  min-width: 360px;
  min-height: 300px;

  padding-top: 48px;
  border-radius: 10px;

  overflow: hidden;
  user-select: none;

  background-color: ${({ $themeColor }) =>
    $themeColor === "Dark" ? lightTextColor : "#ffffff"};

  border: ${({ $themeColor }) =>
    $themeColor === "Dark"
      ? "1px solid #525257"
      : "1px solid #a0a0a0"};

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.35);
`;

/* ================= TITLE ================= */

export const Title = styled.span<{ $themeColor: string }>`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);

  font-size: 12px;
  pointer-events: none;

  color: ${({ $themeColor }) =>
    $themeColor === "Dark" ? "#ffffff" : lightTextColor};
`;

/* ================= HEADER / DRAG AREA ================= */

export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 48px;
  width: 100%;

  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

/* ================= MAC BUTTONS ================= */

export const Buttons = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;

  display: flex;
  gap: 6px;

  span {
    position: relative;
    width: 14px;
    height: 14px;
    cursor: pointer; /* ✅ ADDED */
  }

  /* Action icons */
  span svg:first-child {
    display: none;
    position: absolute;
    font-size: 10px;
    top: 2px;
    left: 2px;
  }

  /* Dots */
  span:first-child svg:last-child {
    color: #ff5f56;
  }

  span:nth-child(2) svg:last-child {
    color: #ffbd2e;
  }

  span:last-child svg:last-child {
    color: #27c93f;
  }

  &:hover {
    span:first-child svg:first-child {
      display: block;
      color: #731f1a;
    }

    span:nth-child(2) svg:first-child {
      display: block;
      color: #6b4f10;
    }

    span:last-child svg:first-child {
      display: block;
      color: #113a16;
      transform: rotate(40deg);
    }
  }
`;

/* ================= FINDER LAYOUT ================= */

export const FinderContainer = styled.div`
  display: flex;
  height: 100%;
`;

/* ================= SIDEBAR ================= */

export const Sidebar = styled.div<{ $themeColor: string }>`
  width: 200px;
  padding: 10px;
  border-right: 1px solid #cfcfcf;

  background: ${({ $themeColor }) =>
    $themeColor === "Dark" ? "#2b2b2b" : "#f4f4f4"};

  span {
    display: block;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;

    color: ${({ $themeColor }) =>
      $themeColor === "Dark" ? "#ffffff" : lightTextColor};

    &:hover {
      background: rgba(0, 0, 0, 0.08);
    }
  }
`;

/* ================= CONTENT ================= */

export const Content = styled.div<{ $themeColor: string }>`
  flex: 1;
  padding: 14px;
  font-size: 14px;
  overflow: auto;

  color: ${({ $themeColor }) =>
    $themeColor === "Dark" ? "#ffffff" : lightTextColor};
`;
