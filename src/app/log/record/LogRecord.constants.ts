import { MasilRecordRequest } from "@/types/Request";

export const DEFAULT_LOG_DATA: MasilRecordRequest = {
  address: {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
  },
  path: [],
  title: "",
  content: "",
  distance: 0,
  totalTime: 0,
  startedAt: "",
  pins: [],
  thumbnailUrl: null,
  postId: null,
};
