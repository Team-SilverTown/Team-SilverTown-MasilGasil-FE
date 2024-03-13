import { MASIL } from "../endPoints";
import { GET } from "../clientRootAPI";
import { MasilsByPeriodResponse } from "@/types/Response";

const getMasilsByPeriod = async ({
  startDate,
  endDate,
}: {
  startDate: string | null;
  endDate: string | null;
}) => {
  return await GET<MasilsByPeriodResponse>({
    endPoint: `/api${MASIL.PERIODIC_GET}?startDate=${startDate ? startDate : ""}&endDate=${endDate ? endDate : ""}`,
    auth: true,
  });
};

export default getMasilsByPeriod;
