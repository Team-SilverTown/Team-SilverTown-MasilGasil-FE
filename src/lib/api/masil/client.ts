import { MasilRecordRequest } from "@/types/Request";
import { MasilDetailResponse } from "@/types/Response";

import { GET, POST } from "../clientRootAPI";
import { MASIL } from "../endPoints";

export const postMasil = async ({ data }: { data: MasilRecordRequest }) => {
  return await POST<{ id: string }>({ endPoint: MASIL.POST, data, auth: true });
};

export const getMasilDetail = async ({ id }: { id: string }) => {
  return await GET<MasilDetailResponse>({
    endPoint: `${MASIL.GET_DETAIL}/${id}`,
    auth: true,
  });
};
