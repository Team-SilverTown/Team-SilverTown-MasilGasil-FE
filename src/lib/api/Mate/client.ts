import { MateCreateRequest } from "@/types/Request";
import { POST } from "../clientRootAPI";
import { MATE } from "../endPoints";

export const postMateCreate = async ({ mateData }: { mateData: MateCreateRequest }) => {
  return await POST<{ id: string }>({
    endPoint: MATE.POST_CREATE,
    data: mateData,
    auth: true,
  });
};
