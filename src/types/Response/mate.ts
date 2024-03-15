import { GeoPosition, Participant } from "../OriginDataType";

export interface MateDetailResponse {
  id: number;
  postId: number;

  title: string;
  content: string;

  gatheringPlacePoint: GeoPosition;
  gatheringPlaceDetail: string;

  gatheringAt: string;
  participants: Participant[];

  capacity: number;
  authorId: number;
  authorNickname: string;
  authorProfileUrl: string | null;
}
