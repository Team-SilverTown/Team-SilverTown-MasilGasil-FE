import { GeoPosition } from "../OriginDataType";

export interface MateCreateRequest {
  postId: number;
  depth1: string;
  depth2: string;
  depth3: string;
  depth4: string;
  title: string;
  content: string;
  gatheringPlacePoint: GeoPosition;
  gatheringPlaceDetail: string;
  gatheringAt: string;
  capacity: number;
}
