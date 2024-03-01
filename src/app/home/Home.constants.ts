import { WalkListProps, PostsListType } from "./Home.types";

export const POSTS_DUMMY_DATA: PostsListType[] = [
  {
    id: "1",
    user_id: "",
    region_1depth_name: "서울시",
    region_2depth_name: "강남구",
    region_3depth_name: "신사동",
    path: [],
    title: "강변뷰가 맛도리인 호탄동 산책로",
    content:
      "집 앞 강변을 따라 걷는데 너무 좋은거에요 그래서 이러쿵저러쿵이러쿵 저러쿵 공유해봅니다",
    thumbnail:
      "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
    is_public: true,
    distance: "10.5km",
    total_time: "1시간 30분",
    view_count: 123,
    like_count: 1000,
    created_at: "날짜",
    updated_at: "날짜",
  },
  {
    id: "2",
    user_id: "",
    region_1depth_name: "서울시",
    region_2depth_name: "강남구",
    region_3depth_name: "신사동",
    path: [],
    title: "강변뷰가 맛도리인 호탄동 산책로",
    content:
      "집 앞 강변을 따라 걷는데 너무 좋은거에요 그래서 이러쿵저러쿵이러쿵 저러쿵 공유해봅니다",
    thumbnail:
      "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
    is_public: true,
    distance: "10.5km",
    total_time: "1시간 30분",
    view_count: 123,
    like_count: 1000,
    created_at: "날짜",
    updated_at: "날짜",
  },
  {
    id: "3",
    user_id: "",
    region_1depth_name: "서울시",
    region_2depth_name: "강남구",
    region_3depth_name: "신사동",
    path: [],
    title: "강변뷰가 맛도리인 호탄동 산책로",
    content:
      "집 앞 강변을 따라 걷는데 너무 좋은거에요 그래서 이러쿵저러쿵이러쿵 저러쿵 공유해봅니다",
    thumbnail:
      "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
    is_public: true,
    distance: "10.5km",
    total_time: "1시간 30분",
    view_count: 123,
    like_count: 1000,
    created_at: "날짜",
    updated_at: "날짜",
  },
];

export const WALKLIST_DUMMY_DATA: WalkListProps[] = [
  {
    title: "우리 동네 인기 산책로",
    urlLink: "/more?keyword=posts&order=popular",
    walkList: POSTS_DUMMY_DATA, // 이 값은 추후 API 데이터로 변경
    type: "Posts",
  },
  {
    title: "요즘 인기 있는 전국 산책로",
    urlLink: "/more?keyword=posts&order=popular",
    walkList: POSTS_DUMMY_DATA,
    type: "Posts",
  },
  {
    title: "내가 좋아하는 산책로",
    urlLink: "/more?keyword=my_like&order=latest",
    walkList: [],
    type: "Posts",
  },
];
