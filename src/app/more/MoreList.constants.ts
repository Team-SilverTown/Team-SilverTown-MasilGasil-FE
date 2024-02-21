import { SearchKeywordType, SortDataType, SortTabType } from "./MoreList.types";

export const HEADER_TITLE: Record<string, string> = {
  my_log: "내 최근 산책 기록",
  my_post: "내가 작성한 산책로",
  my_like: "내가 좋아하는 산책로",
  area_popular: "우리 동네 인기 산책로",
  total_popular: "인기 있는 산책로",
  recent_post: "최근에 작성된 산책로",
};

export const SEARCH_KEYWORD: SearchKeywordType[] = [
  {
    name: "내 최근 산책 기록",
    keyword: "my_log",
    isFilter: true,
    filter: "latest",
  },
  {
    name: "내가 작성한 산책로",
    keyword: "my_post",
    isFilter: true,
    filter: "latest",
  },
  {
    name: "내가 좋아하는 산책로",
    keyword: "my_like",
    isFilter: true,
    filter: "latest",
  },
  {
    name: "인기 있는 산책로",
    keyword: "posts",
    isFilter: true,
    filter: "popular",
  },
  {
    name: "우리 동네 산책로",
    keyword: "posts",
    isFilter: true,
    filter: "latest",
  },
];

export const SORT_DATA: SortDataType[] = [
  {
    title: "최신순",
    keyword: "latest",
  },
  {
    title: "인기순",
    keyword: "popular",
  },
];

export const SORT_TAB: SortTabType = {
  LATEST: "latest",
  POPULAR: "popular",
};
