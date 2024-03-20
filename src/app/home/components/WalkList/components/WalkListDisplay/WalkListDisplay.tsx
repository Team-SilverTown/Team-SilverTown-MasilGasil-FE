"use client";

import Link from "next/link";

import { convertMeter, convertSeconds } from "@/utils";

import { PostListItemResponse } from "@/types/Response/Post";

import { useUI } from "@/components/uiContext/UiContext";

import { LogDetailCard } from "@/components";
import { More } from "@/components/icons";

import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import * as S from "./WalkListDisplay.styles";

interface WalkListItemProps {
  isEmpty: boolean;
  title: string;
  walkList: PostListItemResponse[];
  url: string;
}

const WalkListDisplay = ({ isEmpty, title, walkList, url }: WalkListItemProps) => {
  const { openModal, setModalView } = useUI();

  const handleClickAlert = () => {
    setModalView("DEPLOY_ALERT_VIEW");
    openModal();
  };

  return (
    <section className={S.WalkListSection}>
      <article className={S.HomeWalkListArticle}>
        <h3 style={{ fontSize: FONT_SIZE.LARGE, fontWeight: FONT_WEIGHT.BOLD }}>{title}</h3>

        <a
          onClick={handleClickAlert}
          style={{ cursor: "pointer" }}
        >
          <More />
        </a>
      </article>
      {isEmpty ? (
        <div className={S.NoWalkRecordMessage}>산책로 목록이 비어있어요</div>
      ) : (
        <ul className={S.WalkListContainer}>
          {walkList.map(({ id, title, content, thumbnailUrl, distance, totalTime }) => (
            <li key={id}>
              <Link href={`/post/${id}`}>
                <LogDetailCard
                  title={title}
                  content={content}
                  thumbnailUrl={thumbnailUrl}
                  distance={convertMeter(distance)}
                  totalTime={convertSeconds(totalTime)}
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default WalkListDisplay;
