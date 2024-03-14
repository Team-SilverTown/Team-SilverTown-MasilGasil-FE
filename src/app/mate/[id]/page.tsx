import React from "react";
import MateDetail from "./MateDetail";
import { MateDetailResponse } from "@/types/Response";

interface MateProps {
  params: { id: string };
}

const Mate = ({ params }: MateProps) => {
  const { id } = params;

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
  content: "content",
  gatheringPlacePoint: {
    lat: 10.2,
    lng: 10.1,
  },
  gatheringPlaceDetail: "약국 앞",
  gatheringAt: "2024-03-04T10:05:493.000+09:00",
  participants: [
    {
      id: 1,
      nickname: "산책초보",
      profileUrl: null,
      status: "ACCEPTED",
    },
    {
      id: 2,
      nickname: "산책개고수",
      profileUrl: null,
      status: "ACCEPTED",
    },
    {
      id: 3,
      nickname: "이상한 사람",
      profileUrl: null,
      status: "REQUESTED",
    },
  ],
  capacity: 3,
  authorId: 3,
  authorNickname: "산책쌉고수",
  authorProfileUrl: null,
};
