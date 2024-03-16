import { MateDummyType } from "./Post.types";

export const MATE_DUMMY_DATA: MateDummyType = {
  isEmpty: false,
  contents: [
    {
      id: 1,
      title: "같이 한강 가실분??",
      gatheringAt: "2024-03-13T20:30:00.000000+09:00",
      status: "OPEN",
      capacity: 0,
      authorId: 1,
      authorNickname: "마실",
      authorProfileUrl: null,
    },
    {
      id: 2,
      title: "여의도 한강 공원에서 라면 먹을 사람",
      gatheringAt: "2024-03-14T20:30:00.000000+09:00",
      status: "OPEN",
      capacity: 4,
      authorId: 1,
      authorNickname: "마실",
      authorProfileUrl: null,
    },
    {
      id: 3,
      title: "오산천 가즈아!!",
      gatheringAt: "2024-03-15T20:30:00.000000+09:00",
      status: "CLOSED",
      capacity: 0,
      authorId: 1,
      authorNickname: "마실",
      authorProfileUrl: null,
    },
  ],
  nextCursor: null,
};

export const TAB_CONTENTS = ["메모", "핀", "산책 메이트"];
