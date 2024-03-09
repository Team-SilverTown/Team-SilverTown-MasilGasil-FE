import { create } from "zustand";

interface OriginProps {
  isLogIn: boolean;
  serviceToken?: string;
}

interface UseAuthStoreProps extends OriginProps {
  setAuth: ({ isLogIn, serviceToken }: OriginProps) => void;
}

const useAuthStore = create<UseAuthStoreProps>((set) => ({
  isLogIn: false,
  serviceToken: undefined,

  setAuth: ({ isLogIn, serviceToken }) => {
    set(() => ({
      isLogIn,
      serviceToken,
    }));
  },
}));

export default useAuthStore;
