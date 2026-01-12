// library/useFinderStore.ts
import { create } from "zustand";

type FinderStore = {
  isFinderOpen: boolean;
  openFinder: () => void;
  closeFinder: () => void;
};

export const useFinderStore = create<FinderStore>((set) => ({
  isFinderOpen: false,
  openFinder: () => set({ isFinderOpen: true }),
  closeFinder: () => set({ isFinderOpen: false }),
}));
