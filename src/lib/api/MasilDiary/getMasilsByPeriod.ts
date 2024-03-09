import { MASIL_ENDPOINT } from "../endPoints";
import { GET } from "../clientRootAPI";
import { MasilsByPeriodResponse } from "@/types/Response";

const getMasilsByPeriod = async ({
  startDate,
  endDate,
}: {
  startDate: string | null;
  endDate: string | null;
}) => {
  console.log(
    `/api${MASIL_ENDPOINT.PERIODIC_GET}?startDate=${startDate ? startDate : ""}&endDate=${endDate ? endDate : ""}`,
  );
  return await GET<MasilsByPeriodResponse>({
    endPoint: `/api${MASIL_ENDPOINT.PERIODIC_GET}?startDate=${startDate ? startDate : ""}&endDate=${endDate ? endDate : ""}`,
    auth: true,
  });
};

export default getMasilsByPeriod;
