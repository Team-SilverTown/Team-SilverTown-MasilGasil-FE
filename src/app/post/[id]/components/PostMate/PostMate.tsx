"use client";

import Link from "next/link";
import { MateDummyContents } from "../../Post.types";
import MateCard from "@/components/MateCard";
import * as S from "./PostMate.styles";
import { useUI } from "@/components/uiContext/UiContext";

interface PostMateProps {
  mateData: MateDummyContents[];
}

const PostMate = ({ mateData }: PostMateProps) => {
  const { openModal, setModalView } = useUI();

  const handleClick = () => {
    setModalView("DEPLOY_ALERT_VIEW");
    openModal();
  };

  return (
    <S.PostMateList>
      {mateData.map(
        ({ id, authorProfileUrl, authorNickname, title, gatheringAt, capacity, status }) => (
          <li key={id}>
            <Link
              href={``}
              title={title}
              onClick={handleClick}
            >
              <MateCard
                profileImage={authorProfileUrl}
                nickName={authorNickname}
                title={title}
                date={gatheringAt}
                capacity={capacity}
                status={status}
              />
            </Link>
          </li>
        ),
      )}
    </S.PostMateList>
  );
};

export default PostMate;
