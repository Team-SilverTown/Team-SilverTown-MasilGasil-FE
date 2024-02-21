// 임시 데이터
export interface Dummy {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type KeywordType =
  | "my_log"
  | "my_post"
  | "my_like"
  | "area_popular"
  | "total_popular"
  | "recent_post";

export interface SearchKeywordType {
  name: string;
  keyword: string;
  isFilter: boolean;
  filter?: "latest" | "popular";
}

export interface SortDataType {
  title: string;
  keyword: string;
}

export interface SortTabType {
  LATEST: "latest";
  POPULAR: "popular";
}
