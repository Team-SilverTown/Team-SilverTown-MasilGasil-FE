import { useMemo } from "react";
import usePostCreateContext from "./context/PostCreateContext";
import { GeoPosition } from "@/types/OriginDataType";

const usePostCreateController = () => {
  const { pageStep } = usePostCreateContext();

  const center = useMemo<GeoPosition>(() => ({ lat: 37.497, lng: 127.0254 }), []);
  return {
    pageStep,
    center,
  };
};

export default usePostCreateController;
