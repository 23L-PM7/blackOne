import axios from "axios";
import { create } from "zustand";

export const useFurnitures = create((set) => ({
  furnitures: [],
  setFurnitures: (newList: any) => set(() => ({ furnitures: newList })),
  loadFurnitures: async () => {
    const { data } = await axios.get("/api/furnitures");
    set(() => ({ furnitures: data }));
  },
  single: [],
  loadSingleFurniture: async (slug: string) => {
    const { data } = await axios.get(`/api/furnitures?slug=${slug}`);
    set(() => ({ single: data }));
  },
}));
