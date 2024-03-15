import { PostListItem } from "@/types/OriginDataType/Post";
import { RecentMasil } from "@/types/Response";

export interface PostsListType {
  id: number;
  address: { depth1: string; depth2: string; depth3: string; depth4: string };
  title: string;
  content: string;
  totalTime: number;
  distance: number;
  viewCount: number;
  likeCount: number;
  thumbnailUrl: string;
  hasMate: boolean;
  liked: boolean;
}

interface RecordType {
  title: string;
  urlLink: string;
}

interface RecentMasilsType extends RecordType {
  type: "Masils";
  recordList: RecentMasil[];
  isEmpty?: boolean;
}

interface RecordPostsType extends RecordType {
  type: "Posts";
  recordList: PostListItem[];
  isEmpty?: boolean;
}

export type MyRecordListType = RecentMasilsType | RecordPostsType;
