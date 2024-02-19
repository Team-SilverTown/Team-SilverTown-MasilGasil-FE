import { GeoPosition } from "@/types/OriginDataType";
import { create } from "zustand";

interface UseDraggingStore {
  isDragging: boolean;
  draggingPosition: GeoPosition;

  setIsDragging: (newState: boolean) => void;
  setDraggingPosition: (newPosition: GeoPosition) => void;
}

const useDraggingStore = create<UseDraggingStore>((set) => ({
  isDragging: false,
  draggingPosition: { lat: 0, lng: 0 },

  setIsDragging: (newState) => set(() => ({ isDragging: newState })),
  setDraggingPosition: (newPosition) => set(() => ({ draggingPosition: newPosition })),
}));

export default useDraggingStore;
