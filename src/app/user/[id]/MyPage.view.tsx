import { MyRecordListType, UserInfoType } from "./MyPage.types";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { UserProfileInfo, UserWalkRecord, MyRecordList, MyPageSetting } from "./components";
import * as S from "./MyPage.styles";

interface MyPageViewProps {
  boardList: MyRecordListType[];
  userInfo: UserInfoType;
  userId: number;
}

const MyPageView = ({ boardList, userInfo, userId }: MyPageViewProps) => {
  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title="프로필"
        rightChildren={<MyPageSetting userId={userId} />}
      />
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
    </>
  );
};

export default MyPageView;
