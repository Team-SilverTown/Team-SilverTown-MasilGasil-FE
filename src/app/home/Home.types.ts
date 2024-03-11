import { GeoPosition, Pin } from "@/types/OriginDataType";

export interface WalkListProps {
  title: string;
  urlLink: string;
  walkList: PostsDataType[];
  type: "Posts";
}

export interface PostsDataType {
  id: number;
  depth1: string;
  depth2: string;
  depth3: string;
  depth4: string;
  title: string;
  content: string;
  path: GeoPosition[];
  distance: number;
  totalTime: number;
  isPublic: boolean;
  viewCount: number;
  likeCount: number;
  pins: Pin[];
  authorId: number;
  authorName: string;
  thumbnailUrl: null | string;
}

export type WeatherType = "맑음" | "구름조금" | "흐림";
export type PrecipitationType = "없음" | "비" | "진눈개비" | "눈";
