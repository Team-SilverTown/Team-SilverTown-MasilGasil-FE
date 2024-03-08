import React from "react";
import { MASIL_ENDPOINT } from "../endPoints";
import { GET } from "../clientRootAPI";

const getMasilsByPeriod = async ({
  startDate,
  endDate,
}: {
  startDate: Date | null;
  endDate: Date | null;
}) => {
  return await GET({
    endPoint: `${MASIL_ENDPOINT.PERIODIC_GET}?startDate=${startDate}&endDate=${endDate}`,
  });
};

export default getMasilsByPeriod;
