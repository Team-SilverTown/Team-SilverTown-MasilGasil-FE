"use client";

import { MateDetailResponse } from "@/types/Response";

import * as S from "./MateMembers.styles";
import { Tab } from "@/components";
import { useMemo, useState } from "react";
import useMeStore from "@/lib/stores/useMeStore";
import { MembersList } from "./components";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { Participant } from "@/types/OriginDataType";

interface MateMembersProps {
  mateData: MateDetailResponse;
  acceptedUserList: Participant[];
  requestUserList: Participant[];
}

const AUTHOR_TAB_CONTENT = ["참가자", "신청자"];
const USER_TAB_CONTENT = ["참가자", ""];

const MateMembers = ({ mateData, acceptedUserList, requestUserList }: MateMembersProps) => {
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
        layoutId="member_list"
        style={{
          fontSize: FONT_SIZE.LARGE,
          fontWeight: FONT_WEIGHT.BOLD,
        }}
      />

      <S.MateTabContent>
        {focusTab === 0 && (
          <MembersList
            participants={acceptedUserList}
            authorId={mateData.authorId}
            isAuthor={isAuthor}
            mateId={mateData.id}
          />
        )}

        {focusTab === 1 && (
          <MembersList
            participants={requestUserList}
            authorId={mateData.authorId}
            isApplicantList={true}
            isAuthor={isAuthor}
            mateId={mateData.id}
          />
        )}
      </S.MateTabContent>
    </S.MateMembers>
  );
};

export default MateMembers;
