import { GeoPosition } from "@/types/OriginDataType";
import { UserAddressType } from "@/types/OriginDataType/Location";

const getDetailedAddress = ({ lat, lng }: GeoPosition): Promise<UserAddressType | void> => {
  return new Promise((resolve) => {
    if (!lat || !lng) {
      return;
    }

    return kakao.maps.load(() => {
      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.coord2RegionCode(lng, lat, (result, status) => {
        if (status !== kakao.maps.services.Status.OK) {
          return;
        }

        const { region_1depth_name, region_2depth_name, region_3depth_name, region_4depth_name } =
          result[0];

        resolve({
          depth1: region_1depth_name,
          depth2: region_2depth_name,
          depth3: region_3depth_name,
          depth4: region_4depth_name,
        });
      });

      kakao.maps.services.Status;
    });
  });
};

export default getDetailedAddress;
