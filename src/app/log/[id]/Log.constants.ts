import { GeoPosition, Pin } from "@/types/OriginDataType";

export interface MasilsDataType {
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
  startedAt: string;
  postId: null | number;
  thumbnailUrl: null | string;
  pins: Pin[];
}

export const MASILS_DATA: MasilsDataType = {
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
  thumbnailUrl: null,
  pins: [
    {
      // id: 1,
      point: {
        lat: 37.15601397875854,
        lng: 127.07667498944193,
      },
      content: "아파트 단지 핀 찍음 !!",
      thumbnailUrl:
        "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
    },
    {
      // id: 2,
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
      // id: 3,
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
};

export const TAB_CONTENTS = ["메모", "핀", ""];
