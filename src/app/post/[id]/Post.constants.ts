import { MateDummyType } from "./Post.types";

export const MATE_DUMMY_DATA: MateDummyType[] = [
  {
    id: 1,
    title: "마실가실??",
    content: "4명 정도 같이 산책할 친구 구합니다.",
    gatheringPlace: {
      point: {
        lat: 10.2,
        lng: 10.1,
      },
      detail: "약국 앞",
    },
    gatherAt: "2024-03-04T10:05:33.000+09:00",
    currentParticipants: {
      participants: [
        {
          id: 1,
          nickname: "산책초보",
          profileUrl: null,
        },
        {
          id: 2,
          nickname: "산책개고수",
          profileUrl: null,
        },
      ],
    },
    capacity: 3,
    authorId: 3,
    authorNickname: "닉네임",
    authorProfileUrl: null,
  },
  {
    id: 2,
    title: "한강에서 자전거 타실분",
    content: "한강에서 산책 후 라면에 맥주 때리실 분?",
    gatheringPlace: {
      point: {
        lat: 10.2,
        lng: 10.1,
      },
      detail: "약국 앞",
    },
    gatherAt: "2024-03-12T16:05:50.000+09:00",
    currentParticipants: {
      participants: [
        {
          id: 1,
          nickname: "산책초보",
          profileUrl: null,
        },
        {
          id: 2,
          nickname: "산책개고수",
          profileUrl: null,
        },
      ],
    },
    capacity: 5,
    authorId: 4,
    authorNickname: "닉네임",
    authorProfileUrl: null,
  },
];

export const TAB_CONTENTS = ["메모", "핀", "산책 메이트"];
