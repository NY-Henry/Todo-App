import { getUserName, setUserName } from "@/utils/localStorage";
import { create } from "zustand";

type NameState = {
  name: string;
  setName: (name: string) => void;
};

export const useName = create<NameState>((set) => ({
  name: getUserName(),
  setName(newName) {
    set(() => {
      setUserName(newName);
      return { name: newName };
    });
  },
}));
