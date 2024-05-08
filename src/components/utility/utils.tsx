import axios from "axios";
import { create } from "zustand";

export const useFurnitures = create((set) => ({
  furnitures: [],
  setFurnitures: (newList: any) => set(() => ({ furnitures: newList })),
  loadFurnitures: () => {
    axios.get("api/furnitures").then(({ data }) => {
      set(() => ({ furnitures: data }));
    });
  },
}));
