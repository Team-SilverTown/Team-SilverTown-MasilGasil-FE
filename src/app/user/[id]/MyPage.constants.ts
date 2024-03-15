import { ProfileResponse } from "@/types/Response";
import { MasilsListType, PostsListType, MyRecordListType } from "./MyPage.types";

export const USER_PROFILE_EXCEPTION: ProfileResponse = {
  nickname: "닉네임을 불러올 수 없습니다",
  profileImg: "",
  totalDistance: 0,
  totalCount: 0,
  totalCalories: 0,
};

export const MASILS_DUMMY_DATA: MasilsListType[] = [
  {
    id: 1,
    depth1: "경기도 안양시",
    depth2: "동안구",
    depth3: "관양동",
    depth4: "",
    title: "2024.02.07 산책 기록",
    content: "기록들 주루루룰루ㅜㄱ",
    path: [
      {
        lat: 10.1,
        lng: 10.2,
      },
      {
        lat: 10.1,
        lng: 10.25,
      },
    ],
    distance: 1100,
    totalTime: 3600,
    startedAt: "2024-02-07T18:39:35.329+09:00",
    postId: null,
    thumbnailUrl:
      "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
    pins: [
      {
        id: 1,
        point: {
          lat: 10.0,
          lng: 10.0,
        },
        content:
          "산책로 매력 포인트 1 <br> 이러쿵 저러쿵 뭔가 이쁜 부분이 있어서 사진이랑 남겨봅니다. 으하하하",
        thumbnailUrl: "url",
      },
    ],
  },
  {
    id: 2,
    depth1: "서울특별시",
    depth2: "송파구",
    depth3: "신천동",
    depth4: "",
    title: "2024.02.14 산책 기록",
    content: "기록들 ~~~",
    path: [
      {
        lat: 10.1,
        lng: 10.2,
      },
      {
        lat: 10.1,
        lng: 10.25,
      },
    ],
    distance: 5100,
    totalTime: 10600,
    startedAt: "2024-02-07T18:39:35.329+09:00",
    postId: null,
    thumbnailUrl:
      "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
    pins: [
      {
        id: 1,
        point: {
          lat: 10.0,
          lng: 10.0,
        },
        content:
          "산책로 매력 포인트 1 <br> 이러쿵 저러쿵 뭔가 이쁜 부분이 있어서 사진이랑 남겨봅니다. 으하하하",
        thumbnailUrl: "url",
      },
    ],
  },
  {
    id: 3,
    depth1: "경기도",
    depth2: "오산시",
    depth3: "부산동",
    depth4: "",
    title: "2024.02.07 산책 기록",
    content: "기록들 주루루룰루ㅜㄱ",
    path: [
      {
        lat: 10.1,
        lng: 10.2,
      },
      {
        lat: 10.1,
        lng: 10.25,
      },
    ],
    distance: 3100,
    totalTime: 8600,
    startedAt: "2024-02-07T18:39:35.329+09:00",
    postId: null,
    thumbnailUrl:
      "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
    pins: [
      {
        id: 1,
        point: {
          lat: 10.0,
          lng: 10.0,
        },
        content:
          "산책로 매력 포인트 1 <br> 이러쿵 저러쿵 뭔가 이쁜 부분이 있어서 사진이랑 남겨봅니다. 으하하하",
        thumbnailUrl: "url",
      },
    ],
  },
  {
    id: 4,
    depth1: "경기도",
    depth2: "오산시",
    depth3: "부산동",
    depth4: "",
    title: "2024.02.07 산책 기록",
    content: "기록들 주루루룰루ㅜㄱ",
    path: [
      {
        lat: 10.1,
        lng: 10.2,
      },
      {
        lat: 10.1,
        lng: 10.25,
      },
    ],
    distance: 3100,
    totalTime: 8600,
    startedAt: "2024-02-07T18:39:35.329+09:00",
    postId: null,
    thumbnailUrl:
      "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
    pins: [
      {
        id: 1,
        point: {
          lat: 10.0,
          lng: 10.0,
        },
        content:
          "산책로 매력 포인트 1 <br> 이러쿵 저러쿵 뭔가 이쁜 부분이 있어서 사진이랑 남겨봅니다. 으하하하",
        thumbnailUrl: "url",
      },
    ],
  },
];
export const POSTS_DUMMY_DATA: PostsListType[] = [
  {
    id: 1,
    depth1: "서울시",
    depth2: "강남구",
    depth3: "신사동",
    depth4: "",
    title: "강변뷰가 맛도리인 호탄동 산책로",
    content:
      "집 앞 강변을 따라 걷는데 너무 좋은거에요 그래서 이러쿵저러쿵이러쿵 저러쿵 공유해봅니다",
    path: [
      {
        lat: 10.1,
        lng: 10.2,
      },
    ],
    distance: 1100,
    totalTime: 3600,
    isPublic: true,
    viewCount: 0,
    likeCount: 1,
    pins: [
      {
        id: 1,
        point: {
          lat: 10.0,
          lng: 10.0,
        },
        content:
          "산책로 매력 포인트 1 <br> 이러쿵 저러쿵 뭔가 이쁜 부분이 있어서 사진이랑 남겨봅니다. 으하하하",
        thumbnailUrl: "url",
      },
    ],
    authorId: 1,
    authorName: "송인재",
    thumbnailUrl:
      "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
  },
  {
    id: 2,
    depth1: "서울시",
    depth2: "강남구",
    depth3: "신사동",
    depth4: "",
    title: "여의도 한강 공원 좋네요",
    content: "집 앞 한강 공원 자전거 타기 좋은 코스 공유~~",
    path: [
      {
        lat: 10.1,
        lng: 10.2,
      },
    ],
    distance: 8100,
    totalTime: 5600,
    isPublic: true,
    viewCount: 18,
    likeCount: 1000,
    pins: [
      {
        id: 1,
        point: {
          lat: 10.0,
          lng: 10.0,
        },
        content:
          "산책로 매력 포인트 1 <br> 이러쿵 저러쿵 뭔가 이쁜 부분이 있어서 사진이랑 남겨봅니다. 으하하하",
        thumbnailUrl: "url",
      },
    ],
    authorId: 1,
    authorName: "송인재",
    thumbnailUrl:
      "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
  },
  {
    id: 3,
    depth1: "서울시",
    depth2: "강남구",
    depth3: "신사동",
    depth4: "",
    title: "강변뷰가 맛도리인 호탄동 산책로",
    content:
      "집 앞 강변을 따라 걷는데 너무 좋은거에요 그래서 이러쿵저러쿵이러쿵 저러쿵 공유해봅니다",
    path: [
      {
        lat: 10.1,
        lng: 10.2,
      },
    ],
    distance: 11000,
    totalTime: 30600,
    isPublic: true,
    viewCount: 100,
    likeCount: 1000,
    pins: [
      {
        id: 1,
        point: {
          lat: 10.0,
          lng: 10.0,
        },
        content:
          "산책로 매력 포인트 1 <br> 이러쿵 저러쿵 뭔가 이쁜 부분이 있어서 사진이랑 남겨봅니다. 으하하하",
        thumbnailUrl: "url",
      },
    ],
    authorId: 1,
    authorName: "송인재",
    thumbnailUrl:
      "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
  },
];

export const RECORDLIST_DUMMY_DATA: MyRecordListType[] = [
  {
    title: "최근에 다녀온 산책",
    urlLink: "/diary/test",
    recordList: MASILS_DUMMY_DATA, // 이 값은 추후 API 데이터로 변경
    type: "Masils",
  },
  {
    title: "내가 작성한 산책로",
    urlLink: "/more?keyword=my_post&order=latest",
    recordList: POSTS_DUMMY_DATA,
    type: "Posts",
  },
  {
    title: "내가 좋아하는 산책로",
    urlLink: "/more?keyword=my_like&order=latest",
    recordList: [],
    type: "Posts",
  },
];
