import React from "react";
import MateDetail from "./MateDetail";
import { MateDetailResponse } from "@/types/Response";
import { getMateDetail } from "@/lib/api/Mate/server";

interface MateProps {
  params: { id: string };
}

const Mate = async ({ params }: MateProps) => {
  const { id } = params;
  const data = await getMateDetail(id);

  return (
    <MateDetail
      postId={id}
      mateData={DUMMY}
    />
  );
};

export default Mate;

const DUMMY: MateDetailResponse = {
  id: 1,
  title: "title",
  postId: 5,
  status: "OPEN",
  content: "content",
  gatheringPlacePoint: {
    lat: 37.498095,
    lng: 127.02761,
  },
  gatheringPlaceDetail: "강남역 앞에서 피자먹고 움직여요.",
  gatheringAt: "2024-03-14T07:47:07.486Z",
  participants: [
    {
      id: 1,
      userId: 1,
      nickname: "산책초보",
      profileUrl: null,
      status: "ACCEPTED",
    },
    {
      id: 2,
      userId: 2,
      nickname: "산책개고수",
      profileUrl: null,
      status: "ACCEPTED",
    },
    {
      id: 3,
      userId: 29,
      nickname: "이상한 사람",
      profileUrl: null,
      status: "ACCEPTED",
    },
    {
      id: 3,
      userId: 4,
      nickname: "이상한 사람",
      profileUrl: null,
      status: "REQUESTED",
    },
    {
      id: 3,
      userId: 88,
      nickname: "이상한 사람",
      profileUrl: null,
      status: "REQUESTED",
    },
  ],
  capacity: 3,
  authorId: 29,
  authorNickname: "산책쌉고수",
  authorProfileUrl: null,
};
