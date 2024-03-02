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
      postId={id}
      matePost={DUMMY_DATA}
      authorEvaluation={DUMMY_USER_EVALUATION}
    />
  );
};

export default Mate;

const DUMMY_DATA: MatePost = {
  authorNickname: "재영",
  authorThumbnailUrl: "",

  content:
    "길게길게 써야할것 같은데 뭐라고 써야할지 모르겠어요! 일단 이건 더미 데이터니까 아무말이나 미친듯이 쓰고 있는데 혹시 저희 글자 제한이 존재할까요? 근데 content니까 글자 제한을 두는것도 좀 그럴려나요? 그리고 이걸 엄청 길게 쓰는 사람이 있을까요? 태그도 만들어야할까요? 고민할게 많네요?? 근데 방학이 방학같지 않네요.. 할것도 없고 후... 우리팀이 압도적으로 UI가 이쁠수도 있을것같아요 근데 이러고 최종 발표회때 우와.. 하면서 다른 팀걸 지켜보고있겠죠? 이정도로 길게쓰면 될까요?",

  // 일단 임시로 스트링으로 직접 날짜 표시 -  추후 변환 함수 생성 예장
  mateTime: "",
  // location에 대한 부분도 상의 필요
  mateLocation: "오산천",

  recruitedUser: 5,
  recruitingUser: 10,

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
