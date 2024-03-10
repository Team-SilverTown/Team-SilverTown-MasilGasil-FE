import { UserProfileInfo, UserWalkRecord, MyRecordList } from "./components";
import { MyRecordListType, UserInfoType } from "./MyPage.types";
import * as S from "./MyPage.styles";

interface MyPageViewProps {
  boardList: MyRecordListType[];
  userInfo: UserInfoType;
}

const MyPageView = ({ boardList, userInfo }: MyPageViewProps) => {
  return (
    <S.UserProfileContainer>
      <S.UserProfileLayout className="scrollbar-hide">
        <UserProfileInfo
          profileImage=""
          profileName="달려라댕댕아"
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

export default MyPageView;
