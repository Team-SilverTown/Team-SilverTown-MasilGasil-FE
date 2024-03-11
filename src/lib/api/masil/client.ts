import { MasilRecordRequest } from "@/types/Request";
import { GET, POST } from "../clientRootAPI";
import { MASIL } from "../endPoints";
import { MasilDetailResponse } from "@/types/Response";

export const postMasil = async ({ data }: { data: MasilRecordRequest }) => {
  return await POST<{ id: string }>({ endPoint: MASIL.POST, data, auth: true });
};

export const getMasilDetail = async ({ id }: { id: string }) => {
  return await GET<MasilDetailResponse>({
    endPoint: `${MASIL.GET_DETAIL}/${id}`,
    auth: true,
  });
};
