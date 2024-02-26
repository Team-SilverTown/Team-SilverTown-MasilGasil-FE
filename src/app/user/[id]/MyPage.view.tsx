"use client";

import * as GS from "@/styles/GlobalStyle";
import { UserInfo, UserWalkRecord, MyRecordList } from "./components";
import { MyRecordListProps } from "./components/MyRecordList";

interface MypageViewProps {
  boardList: MyRecordListProps[];
}

const MypageView = ({ boardList }: MypageViewProps) => {
  return (
    <GS.CommonContainer>
      <UserInfo
        profileImage=""
        profileName="김개똥"
        profileMessage="간단한 자기소개!!"
      />
      <UserWalkRecord
        totalWalkDistance={104.2}
        totalWalkCount={50}
        exerciseIntensity="1"
        userAge="1994.12.26"
        userWeight={71}
        userHeight={177}
        gender="male"
      />
      {boardList.map(({ title, urlLink, recordList, type }) => (
        <MyRecordList
          key={title}
          title={title}
          urlLink={urlLink}
          recordList={recordList}
          type={type}
        />
      ))}
    </GS.CommonContainer>
  );
};

export default MypageView;
