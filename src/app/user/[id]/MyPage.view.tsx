"use client";

import { UserInfo, UserWalkRecord, MyRecordList } from "./components";
import { MyRecordListProps } from "./components/MyRecordList";
import * as S from "./Mypage.styles";

interface MypageViewProps {
  RECORDLIST_DUMMY_DATA: MyRecordListProps[];
}

const MypageView = ({ RECORDLIST_DUMMY_DATA }: MypageViewProps) => {
  return (
    <S.UserProfileContainer>
      <UserInfo
        profileImage=""
        profileName="김개똥"
        profileMessage="간단한 자기소개!!"
      />
      <UserWalkRecord
        totalWalkDistance={104.2}
        totalWalkCount={50}
        exerciseIntensity="1"
        userBirthday="1994.12.26"
        userWeight={71}
        userHeight={177}
        gender="male"
      />
      {RECORDLIST_DUMMY_DATA.map(({ title, urlLink, recordList, type }) => (
        <MyRecordList
          title={title}
          urlLink={urlLink}
          recordList={recordList}
          type={type}
        />
      ))}
    </S.UserProfileContainer>
  );
};

export default MypageView;
