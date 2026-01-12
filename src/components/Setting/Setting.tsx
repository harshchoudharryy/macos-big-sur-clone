import { useRef, useEffect, useState } from "react";
import { MdCircle, MdOutlineClose, MdMinimize, MdCode } from "react-icons/md";
import {
  Images,
  Modal,
  Wallpapers,
  Image,
  Themes,
  Title,
  Buttons,
  Header,
} from "./Style";
import { themes, wallpapers } from "../../library/constant";
import { useSettingStore } from "../../library/useSettingStore";
import { useWallpaper } from "../../library/useWallpaperStore";
import { useThemeStore } from "../../library/useThemeStore";

export function Setting() {
  const { setSettingOpen } = useSettingStore();
  const { setWallpaper } = useWallpaper();
  const { setThemeColor, themeColor } = useThemeStore();

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
    <Modal ref={modalRef} $themeColor={themeColor}>
       {/* DRAG HANDLE */}
  <Header onMouseDown={startDrag} />
    <Buttons onPointerDown={(e) => e.stopPropagation()}>
          <span onClick={() => setSettingOpen(false)}>
          <MdOutlineClose />
          <MdCircle />
        </span>
        <span>
          <MdMinimize />
          <MdCircle />
        </span>
        <span>
          <MdCode />
          <MdCircle />
        </span>
      </Buttons>

      <Title $themeColor={themeColor}>System Preference</Title>

      <Themes $themeColor={themeColor}>
        <h2>Themes</h2>
        <Images>
          {themes.map((theme) => (
            <Image
              key={theme.name}
              $themeColor={themeColor}
              onClick={() => setThemeColor(theme.name)}
            >
              <img src={theme.thumbnail} alt={theme.name} />
              <span>{theme.name}</span>
            </Image>
          ))}
        </Images>
      </Themes>

      <Wallpapers $themeColor={themeColor}>
        <h2>Wallpapers</h2>
        <Images>
          {wallpapers.map((wallpaper) => (
            <Image
              key={wallpaper.name}
              $themeColor={themeColor}
              onClick={() => setWallpaper(wallpaper.url)}
            >
              <img src={wallpaper.url} alt={wallpaper.name} />
              <span>{wallpaper.name}</span>
            </Image>
          ))}
        </Images>
      </Wallpapers>
    </Modal>
  );
}
