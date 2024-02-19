import { create } from "zustand";

interface UseMapCenterStore {
  isOutCenter: boolean;

  setIsOutCenter: (newState: boolean) => void;
}

/**
 * @summary Masil Map 의 사용자 위치와 현재 Map의 center 위치가 일치하지 않을때의 상태를 관리합니다.
 *
 * ( 별도 store의 관리 목적은 추후 다른 컴포넌트에서 Map의 center를 사용자 위치로 강제 이동시킬 수 있도록! )
 */
const useMapCenterStore = create<UseMapCenterStore>((set) => ({
  isOutCenter: false,

  setIsOutCenter: (newState) => set(() => ({ isOutCenter: newState })),
}));

export default useMapCenterStore;
