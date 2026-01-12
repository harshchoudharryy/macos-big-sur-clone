import styled from "styled-components";
import { lightTextColor } from "../../library/constant";

/* ================= MODAL ================= */

export const Modal = styled.div<{ $themeColor: string }>`
  position: fixed;

  /* 🔴 REQUIRED FOR DRAGGING */
  top: 120px;
  left: 120px;

  width: 500px;
  height: 520px;

  min-width: 360px;
  min-height: 300px;

  padding-top: 48px;
  border-radius: 10px;

  overflow: auto;

  background-color: ${({ $themeColor }) =>
    $themeColor === "Dark" ? lightTextColor : "white"};

  border: ${({ $themeColor }) =>
    $themeColor === "Dark" ? "1px solid #525257" : "1px solid #a0a0a0"};

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.35);

  user-select: none;
`;

/* ================= TITLE ================= */

export const Title = styled.span<{ $themeColor: string }>`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%); /* SAFE – horizontal only */

  font-size: 12px;
  pointer-events: none;

  color: ${({ $themeColor }) =>
    $themeColor === "Dark" ? "white" : lightTextColor};
`;

/* ================= HEADER / DRAG AREA ================= */
export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 48px;
  width: 100%;

  cursor: grab;
  z-index: 1;

  &:active {
    cursor: grabbing;
  }
`;


/* ================= SECTIONS ================= */

const Section = styled.div<{ $themeColor: string }>`
  padding: 10px;

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
    color: ${({ $themeColor }) =>
      $themeColor === "Dark" ? "white" : lightTextColor};
  }
`;

export const Themes = Section;
export const Wallpapers = Section;

/* ================= IMAGE GRID ================= */

export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Image = styled.div<{
  $themeColor: string;
  $active?: boolean;
}>`
  cursor: pointer;

  img {
    width: 130px;
    height: 80px;
    border-radius: 6px;

    border: ${({ $active }) =>
      $active ? "2px solid #4f8cff" : "1px solid transparent"};

    transition: transform 0.2s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  span {
    display: block;
    margin-top: 6px;
    font-size: 13px;
    text-align: center;

    color: ${({ $themeColor }) =>
      $themeColor === "Dark" ? "white" : lightTextColor};
  }
`;

/* ================= MAC BUTTONS ================= */
export const Buttons = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;

  display: flex;
  gap: 6px;

  cursor: default;
  z-index: 2;

  span {
    position: relative;
    width: 14px;
    height: 14px;
    cursor: pointer;
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
