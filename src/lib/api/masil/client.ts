import { MasilRecordRequest } from "@/types/Request";
import { GET, POST } from "../clientRootAPI";
import { MASIL } from "../endPoints";
import { MasilList } from "@/types/Response";

export const postMasil = async ({ data }: { data: MasilRecordRequest }) => {
  return await POST<{ id: string }>({ endPoint: MASIL.POST, data, auth: true });
};

// 임시 테스트
export const getMasilList = async ({ size }: { size: number }) => {
  return await GET<MasilList>({
    endPoint: `${MASIL.GET_LIST}?size=${size}`,
    auth: true,
  });
};
