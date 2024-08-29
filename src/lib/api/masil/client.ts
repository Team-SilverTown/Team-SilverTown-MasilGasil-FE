import { MasilRecordRequest } from "@/types/Request";
import { MasilDetailResponse } from "@/types/Response";

import { DELETE, GET, POST } from "../clientRootAPI";
import { END_POINT } from "../endPoints";

export const postMasil = async ({ data }: { data: MasilRecordRequest }) => {
  return await POST<{ id: string }>({ endPoint: END_POINT.MASIL.POST, data, auth: true });
};

export const getMasilDetail = async ({ id }: { id: string }) => {
  return await GET<MasilDetailResponse>({
    endPoint: END_POINT.MASIL.GET_DETAIL(id),
    auth: true,
  });
};

export const deleteMasil = async ({ id }: { id: string }) => {
  return await DELETE({
    endPoint: END_POINT.MASIL.DELETE(id),
    auth: true,
  });
};
