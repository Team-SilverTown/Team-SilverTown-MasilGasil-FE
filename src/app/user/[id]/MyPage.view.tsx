import { UserProfileInfo, UserWalkRecord, MyRecordList } from "./components";
import { MyRecordListType, UserInfoType } from "./Mypage.types";
import * as S from "./Mypage.styles";

interface MypageViewProps {
  boardList: MyRecordListType[];
  userInfo: UserInfoType;
}

const MypageView = ({ boardList, userInfo }: MypageViewProps) => {
  return (
    <S.UserProfileContainer>
      <S.UserProfileLayout className="scrollbar-hide">
        <UserProfileInfo
          profileImage=""
          profileName="김개똥"
        />
        <UserWalkRecord
          totalWalkDistance={11000}
          totalWalkCount={50}
          userInfo={userInfo}
        />
        {boardList.map(({ title, urlLink, recordList, type }) => (
          <MyRecordList
            title={title}
            urlLink={urlLink}
            recordList={recordList}
            type={type}
            userInfo={userInfo}
          />
        ))}
      </S.UserProfileLayout>
    </S.UserProfileContainer>
  );
};

export default MypageView;
