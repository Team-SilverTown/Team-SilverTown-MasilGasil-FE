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
  pins: PinsType[];
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
  pins: PinsType[];
  authorId: number;
  authorName: string;
  thumbnailUrl: string;
}

interface PathType {
  lat: number;
  lng: number;
}

interface PinsType {
  id: number;
  point: PathType;
  content: string;
  thumbnail: string;
}

export interface UserInfoType {
  sex?: "MALE" | "FEMALE";
  birthDate?: string;
  height?: number;
  weight?: number;
  exerciseIntensity?: "SUPER_LOW" | "LOW" | "MIDDLE" | "HIGH" | "SUPER_HIGH";
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
