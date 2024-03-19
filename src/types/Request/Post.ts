import { GeoPosition, Pin } from "../OriginDataType";

export interface PostCreateRequest {
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
  pins: Pin[];
  thumbnailUrl: string | null;
}

export interface PostListRequest {
  authorId?: number;
  depth1?: string;
  depth2?: string;
  depth3?: string;
  order: "LATEST" | "MOST_POPULAR";
  cursor?: string;
  size?: number;
}
