import { MasilRecordRequest } from "@/types/Request";
import { POST } from "../clientRootAPI";
import { MASIL } from "../endPoints";

export const postMasil = async ({ data }: { data: MasilRecordRequest }) => {
  return await POST<{ id: string }>({ endPoint: MASIL.POST, data, auth: true });
};
