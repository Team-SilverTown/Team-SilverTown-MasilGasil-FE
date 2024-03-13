import { MeResponse } from "@/types/Response";
import { PostsDataType, WalkListProps } from "./Home.types";

export const POSTS_DATA: PostsDataType[] = [
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
    isPublic: true,
    viewCount: 0,
    likeCount: 1,
    pins: [
      {
        id: 1,
        point: {
          lat: 37.15601397875854,
          lng: 127.07667498944193,
        },
        content: "아파트 단지 핀 찍음 !!",
        thumbnailUrl:
          "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
      },
      {
        id: 2,
        point: {
          lat: 37.15967325314658,
          lng: 127.07514758834486,
        },
        content:
          "오산문화예술회관 뒷 편 오산천 산책로 핀 찍음 !!! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        thumbnailUrl:
          "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
      },
      {
        id: 3,
        point: {
          lat: 37.15700030255883,
          lng: 127.06993264254544,
        },
        content:
          "오산천 체육공원 중앙 위치 핀 찍음 !!! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        thumbnailUrl:
          "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
      },
    ],
    authorId: 1,
    authorName: "조승현",
    thumbnailUrl:
      "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
  },
  {
    id: 2,
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
    isPublic: true,
    viewCount: 0,
    likeCount: 1,
    pins: [
      {
        id: 1,
        point: {
          lat: 37.15601397875854,
          lng: 127.07667498944193,
        },
        content: "아파트 단지 핀 찍음 !!",
        thumbnailUrl:
          "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
      },
      {
        id: 2,
        point: {
          lat: 37.15967325314658,
          lng: 127.07514758834486,
        },
        content:
          "오산문화예술회관 뒷 편 오산천 산책로 핀 찍음 !!! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        thumbnailUrl:
          "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
      },
      {
        id: 3,
        point: {
          lat: 37.15700030255883,
          lng: 127.06993264254544,
        },
        content:
          "오산천 체육공원 중앙 위치 핀 찍음 !!! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        thumbnailUrl:
          "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
      },
    ],
    authorId: 1,
    authorName: "조승현",
    thumbnailUrl:
      "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
  },
  {
    id: 3,
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
    isPublic: true,
    viewCount: 0,
    likeCount: 1,
    pins: [
      {
        id: 1,
        point: {
          lat: 37.15601397875854,
          lng: 127.07667498944193,
        },
        content: "아파트 단지 핀 찍음 !!",
        thumbnailUrl:
          "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
      },
      {
        id: 2,
        point: {
          lat: 37.15967325314658,
          lng: 127.07514758834486,
        },
        content:
          "오산문화예술회관 뒷 편 오산천 산책로 핀 찍음 !!! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        thumbnailUrl:
          "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
      },
      {
        id: 3,
        point: {
          lat: 37.15700030255883,
          lng: 127.06993264254544,
        },
        content:
          "오산천 체육공원 중앙 위치 핀 찍음 !!! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        thumbnailUrl:
          "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
      },
    ],
    authorId: 1,
    authorName: "조승현",
    thumbnailUrl: null,
  },
];

export const USER_DUMMY_DATA: MeResponse = {
  userId: 1,
  nickname: "nickname",
  profileImg: "profileImg",
  sex: "MALE",
  birthDate: "1999-03-21",
  height: 168,
  weight: 68,
  exerciseIntensity: "SUPER_LOW",
  isPublic: true,
};

export const WALKLIST_DUMMY_DATA: WalkListProps[] = [
  {
    title: "우리 동네 인기 산책로",
    urlLink: "/more?keyword=posts&order=popular",
    walkList: POSTS_DATA, // 이 값은 추후 API 데이터로 변경
    type: "Posts",
  },
  {
    title: "요즘 인기 있는 전국 산책로",
    urlLink: "/more?keyword=posts&order=popular",
    walkList: POSTS_DATA,
    type: "Posts",
  },
  {
    title: "내가 좋아하는 산책로",
    urlLink: "/more?keyword=my_like&order=latest",
    walkList: [],
    type: "Posts",
  },
];
