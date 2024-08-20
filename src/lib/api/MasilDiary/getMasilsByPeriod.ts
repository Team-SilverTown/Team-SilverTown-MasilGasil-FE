import { MasilsByPeriodResponse } from "@/types/Response";

import { GET } from "../clientRootAPI";
import { END_POINT } from "../endPoints";

const getMasilsByPeriod = async ({
  startDate,
  endDate,
}: {
  startDate: string | null;
  endDate: string | null;
}) => {
  return await GET<MasilsByPeriodResponse>({
    endPoint: END_POINT.MASIL.GET_PERIOD({ startDate, endDate }),
    auth: true,
  });
};

export default getMasilsByPeriod;
