"use client";

import { MateDetailResponse } from "@/types/Response";

import * as S from "./MateMembers.styles";
import { Tab } from "@/components";
import { useMemo, useState } from "react";
import useMeStore from "@/stores/useMeStore";
import { ApplicantList, MembersList } from "./components";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

interface MateMembersProps {
  mateData: MateDetailResponse;
}

const AUTHOR_TAB_CONTENT = ["참가자", "신청자"];
const USER_TAB_CONTENT = ["참가자", ""];

const MateMembers = ({ mateData }: MateMembersProps) => {
  const { userId } = useMeStore();
  const [focusTab, setFocusTab] = useState(0);
  const isAuthor = useMemo(() => userId === mateData.authorId, [userId, mateData.authorId]);

  const handleClickTab = (index: number) => {
    if (isAuthor && !AUTHOR_TAB_CONTENT[index]) {
      return;
    }

    if (!isAuthor && !USER_TAB_CONTENT[index]) {
      return;
    }

    setFocusTab(index);
  };

  return (
    <S.MateMembers>
      <Tab
        tabContents={isAuthor ? AUTHOR_TAB_CONTENT : USER_TAB_CONTENT}
        tabClickHandler={handleClickTab}
        focusedTab={focusTab}
        style={{
          height: "10rem",
          padding: "2rem 0",
          fontSize: FONT_SIZE.LARGE,
          fontWeight: FONT_WEIGHT.BOLD,
          border: "1px solid red",
        }}
      />

      {focusTab === 0 && <MembersList />}

      {focusTab === 1 && <ApplicantList />}
    </S.MateMembers>
  );
};

export default MateMembers;
