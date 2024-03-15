import { MeResponse } from "@/types/Response";
import { MyRecordListType } from "./MyPage.types";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { UserProfileInfo, UserWalkRecord, MyRecordList, MyPageSetting } from "./components";
import * as S from "./MyPage.styles";
import Divider from "@/components/Divider/Divider";

interface MyPageViewProps {
  boardList: MyRecordListType[];
  userInfo: MeResponse;
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
          <S.HeaderContainer>
            <h3>통계</h3>
            <Divider style={{ backgroundColor: "#EFEFEF" }} />
          </S.HeaderContainer>
          <UserWalkRecord
            totalWalkDistance={11000}
            totalWalkCount={50}
            userInfo={userInfo}
          />

          <S.HeaderContainer>
            <h3>산책</h3>
            <Divider style={{ backgroundColor: "#EFEFEF" }} />
          </S.HeaderContainer>
          {boardList.map(({ title, urlLink, recordList, type }, index) => (
            <MyRecordList
              key={index}
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
