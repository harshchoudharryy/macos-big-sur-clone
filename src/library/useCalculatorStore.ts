import { create } from "zustand";

type CalculatorState = {
  isCalculatorOpen: boolean;
  openCalculator: () => void;
  closeCalculator: () => void;
};

export const useCalculatorStore = create<CalculatorState>((set) => ({
  isCalculatorOpen: false,
  openCalculator: () => set({ isCalculatorOpen: true }),
  closeCalculator: () => set({ isCalculatorOpen: false }),
}));
