import { create } from "zustand";

export type DateType = Date | number | string;

interface DateState {
  date: DateType;
  setDate: (date: DateType) => void;
}

export const useDateStore = create<DateState>((set) => ({
  date: new Date(),
  setDate: (date: DateType) => set({ date }),
}));
