import { GeoPosition, Pin } from "../OriginDataType";
import { PostListItem } from "../OriginDataType/Post";

export interface PostDetailResponse {
  id: number;

  depth1: string;
  depth2: string;
  depth3: string;
  depth4: string;
  path: GeoPosition[];

  title: string;
  content: string;

  distance: number;
  totalTime: number;

  isPublic: boolean;

  viewCount: number;
  likeCount: number;
  pins: Pin[];

  authorId: number;
  authorName: string;

  thumbnailUrl: string;
}

export interface PostListResponse {
  isEmpty: boolean;
  contents: PostListItem[];
  nextCursor: string;
}
