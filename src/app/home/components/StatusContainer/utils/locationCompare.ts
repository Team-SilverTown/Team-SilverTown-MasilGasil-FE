import { LocationType } from "@/lib/stores/useLocationDataStore";

const locationCompare = (currentLocation: LocationType, newLocation: LocationType) => {
  if (
    !currentLocation.lat ||
    !currentLocation.lng ||
    !currentLocation.tmX ||
    !currentLocation.tmY
  ) {
    return true;
  }

  if (!newLocation.lat || !newLocation.lng || !newLocation.tmX || !newLocation.tmY) {
    return true;
  }

  const lat = Math.abs(currentLocation.lat - newLocation.lat);
  const lng = Math.abs(currentLocation.lng - newLocation.lng);
  const tmX = Math.abs(currentLocation.tmX - newLocation.tmX);
  const tmY = Math.abs(currentLocation.tmY - newLocation.tmY);

  if (lat > 0.001 || lng > 0.001 || tmX > 0.001 || tmY > 0.001) {
    return true;
  }

  return false;
};

export default locationCompare;
