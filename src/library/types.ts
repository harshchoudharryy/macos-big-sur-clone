export interface MenuItemType {
  label: string;
  children: (null | string)[];
}

export type DockItemType =
| {
      name: string;
      icon: string;
      type: "calculator";
    }  
| {
      name: string;
      icon: string;
      type: "spotify";
    }  
| {
      name: string;
      icon: string;
      type: "link";
      link: string;
    }
  | {
      name: string;
      icon: string;
      type: "iframe";
    }
  | {
      name: string;
      icon: string;
      type: "finder";
    }
  | {
      name: string;
      icon: string;
      type: "settings";
    };

export interface WallpaperType {
  name: string;
  url: string;
}

export interface ThemeType {
  name: string;
  thumbnail: string;
  attr: string;
}
