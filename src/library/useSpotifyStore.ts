import { create } from "zustand";

type SpotifyState = {
  isSpotifyOpen: boolean;
  openSpotify: () => void;
  closeSpotify: () => void;
};

export const useSpotifyStore = create<SpotifyState>((set) => ({
  isSpotifyOpen: false,
  openSpotify: () => set({ isSpotifyOpen: true }),
  closeSpotify: () => set({ isSpotifyOpen: false }),
}));
