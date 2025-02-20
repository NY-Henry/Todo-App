import { create } from "zustand";

export type DateType = Date | undefined;

interface DateState {
  date: DateType;
  setDate: (date: DateType) => void;
}

export const useDateStore = create<DateState>((set) => ({
  date: undefined,
  setDate: (date: DateType) => set({ date }),
}));
