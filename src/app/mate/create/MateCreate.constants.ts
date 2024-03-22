import { MateCreateRequest } from "@/types/Request";

export const regularFields: {
  title: string;
  placeholder: string;
  type?: string;
  name: "title" | "content" | "gatheringPlaceDetail" | "date";
}[] = [
  { title: "제목", placeholder: "제목을 입력해주세요.", name: "title" },
  { title: "설명", placeholder: "설명을 입력해주세요.", name: "content" },
  { title: "위치", placeholder: "위치를 입력해주세요.", name: "gatheringPlaceDetail" },
  { title: "희망 날짜", placeholder: "날짜를 입력해주세요.", name: "date" },
];

export const DEFAULT_MATE_CREATE_VALUE: MateCreateRequest = {
  postId: 0,
  depth1: "",
  depth2: "",
  depth3: "",
  depth4: "",
  title: "",
  content: "",
  gatheringPlacePoint: { lat: 0, lng: 0 },
  gatheringPlaceDetail: "",
  gatheringAt: "",
  capacity: 0,
};
