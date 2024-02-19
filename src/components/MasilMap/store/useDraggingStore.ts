import { create } from "zustand";

interface UseDraggingStore {
  isDragging: boolean;

  setIsDragging: (newState: boolean) => void;
}

const useDraggingStore = create<UseDraggingStore>((set) => ({
  isDragging: false,

  setIsDragging: (newState) => set(() => ({ isDragging: newState })),
}));

export default useDraggingStore;
