import { useRef } from "react";
import { MotionValue, useSpring, useTransform } from "framer-motion";
import { DockIcon, DockLink } from "./Style";
import { useFinderStore } from "../../library/useFinderStore";
import { useCalculatorStore } from "../../library/useCalculatorStore";
import { useSpotifyStore } from "../../library/useSpotifyStore";


type AppIconProps = {
  mouseX: MotionValue;
  item: {
    name: string;
    icon: string;
    type: "finder" | "settings" | "calculator"| "spotify"  | "link";
    link?: string;
  };
  onSettingsClick?: () => void;
};


export function AppIcon({ mouseX, item, onSettingsClick }: AppIconProps) {
  const ref = useRef<HTMLImageElement>(null);
  const { openFinder } = useFinderStore();
  const { openCalculator } = useCalculatorStore();
  const { openSpotify } = useSpotifyStore();



  

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [70, 100, 70]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const handleClick = () => {
    switch (item.type) {
      case "finder":
        openFinder();
        break;

      case "settings":
        onSettingsClick?.();
        break;
      case "calculator":
        openCalculator();
        break;
      case "spotify":
        openSpotify();
        break;

      default:
        break;
    }
  };

  if (item.type === "link" && item.link) {
    return (
      <DockLink href={item.link} target="_blank" rel="noopener noreferrer">
        <DockIcon ref={ref} src={item.icon} style={{ width }} />
      </DockLink>
    );
  }

  return (
    <DockIcon
      ref={ref}
      src={item.icon}
      style={{ width }}
      onClick={handleClick}
    />
  );
}
