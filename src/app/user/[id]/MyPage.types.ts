import { Pin } from "@/types/OriginDataType";

export interface MasilsListType {
  id: number;
  depth1: string;
  depth2: string;
  depth3: string;
  depth4: string;
  title: string;
  content: string;
  path: PathType[];
  distance: number;
  totalTime: number;
  startedAt: string;
  postId: null | number;
  thumbnailUrl: null | string;
  pins: Pin[];
}

export interface PostsListType {
  id: number;
  depth1: string;
  depth2: string;
  depth3: string;
  depth4: string;
  title: string;
  content: string;
  path: PathType[];
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

interface PathType {
  lat: number;
  lng: number;
}

interface RecordType {
  title: string;
  urlLink: string;
}

interface RecordMasilsType extends RecordType {
  type: "Masils";
  recordList: MasilsListType[];
}

interface RecordPostsType extends RecordType {
  type: "Posts";
  recordList: PostsListType[];
}

export type MyRecordListType = RecordMasilsType | RecordPostsType;
