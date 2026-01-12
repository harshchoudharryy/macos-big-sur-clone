import { useRef, useEffect, useState } from "react";
import { MdCircle, MdOutlineClose, MdMinimize, MdCode } from "react-icons/md";
import {
  Modal,
  Buttons,
  Title,
  FinderContainer,
  Sidebar,
  Content,
} from "./FinderStyle";
import { useThemeStore } from "../../library/useThemeStore";
import { useFinderStore } from "../../library/useFinderStore";

export function FinderWindow() {
  const { themeColor } = useThemeStore();
  const { closeFinder } = useFinderStore();

  const modalRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const startDrag = (e: React.MouseEvent) => {
    if (!modalRef.current) return;

    const rect = modalRef.current.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    setDragging(true);
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging || !modalRef.current) return;

      modalRef.current.style.left = `${e.clientX - offset.current.x}px`;
      modalRef.current.style.top = `${e.clientY - offset.current.y}px`;
    };

    const stop = () => setDragging(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stop);
    };
  }, [dragging]);

  return (
    <Modal ref={modalRef} $themeColor={themeColor} onMouseDown={startDrag}>
      {/* MAC BUTTONS */}
      <Buttons onMouseDown={startDrag}>
        <span onMouseDown={(e) => e.stopPropagation()} onMouseUp={closeFinder}>
          <MdOutlineClose />
          <MdCircle />
        </span>

        <span onMouseDown={(e) => e.stopPropagation()}>
          <MdMinimize />
          <MdCircle />
        </span>
        <span onMouseDown={(e) => e.stopPropagation()}>
          <MdCode />
          <MdCircle />
        </span>
      </Buttons>

      {/* TITLE */}
      <Title $themeColor={themeColor}>Finder</Title>

      {/* CONTENT */}
      <FinderContainer>
        <Sidebar $themeColor={themeColor}>
          <span>Desktop</span>
          <span>Documents</span>
          <span>Downloads</span>
          <span>Pictures</span>
          <span>Applications</span>
        </Sidebar>

        <Content $themeColor={themeColor}>
          <p>Select a folder</p>
        </Content>
      </FinderContainer>
    </Modal>
  );
}
