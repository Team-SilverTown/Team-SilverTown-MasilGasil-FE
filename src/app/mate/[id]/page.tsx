import React from "react";
import MateDetail from "./MateDetail";
import { MatePost } from "./MateDetail.types";

interface MateProps {
  params: { id: string };
}

const Mate = ({ params }: MateProps) => {
  const { id } = params;

  return (
    <MateDetail
      matePost={DUMMY_DATA}
      authorEvaluation={DUMMY_USER_EVALUATION}
    />
  );
};

export default Mate;

const DUMMY_DATA: MatePost = {
  authorNickname: "재영",
  members: [
    { user_id: "22", state: "invited", thumbnailUrl: "", nickname: "기술 브레인 원주" },
    { user_id: "33", state: "invited", thumbnailUrl: "", nickname: "멘탈 브레이커 송희" },
    { user_id: "44", state: "invited", thumbnailUrl: "", nickname: "디자인 천재 재웅" },
    { user_id: "55", state: "invited", thumbnailUrl: "", nickname: "CSS의 황제 승현" },
  ],
};

const DUMMY_USER_EVALUATION = {
  kind: 9172613,
  time: 99214718,
  bad: 0,
};
