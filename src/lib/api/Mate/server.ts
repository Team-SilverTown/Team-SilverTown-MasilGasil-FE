import { MateDetailResponse } from "@/types/Response";
import { GET } from "../serverRootAPI";
import { MATE } from "../endPoints";

export async function getMateDetail(id: string) {
  const response = await GET<MateDetailResponse>({
    endPoint: `${MATE.GET_DETAIL}/${id}`,
    options: { cache: "no-store" },
  });

  return response;
}
