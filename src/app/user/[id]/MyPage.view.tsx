import { ProfileResponse } from "@/types/Response";
import { MyRecordListType } from "./MyPage.types";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { UserProfileInfo, UserWalkRecord, MyRecordList, MyPageSetting } from "./components";
import * as S from "./MyPage.styles";
import Divider from "@/components/Divider/Divider";

interface MyPageViewProps {
  boardList: MyRecordListType[];
  userInfo: ProfileResponse;
  userId: number;
  isMe: boolean | undefined;
  isPrivateUser: boolean;
}

const MyPageView = ({ boardList, userInfo, userId, isMe, isPrivateUser }: MyPageViewProps) => {
  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title="프로필"
        rightChildren={isMe && <MyPageSetting userId={userId} />}
      />
      <S.UserProfileContainer>
        <S.UserProfileLayout className="scrollbar-hide">
          <UserProfileInfo
            profileImage={userInfo.profileImg}
            profileName={userInfo.nickname}
            isMe={isMe}
          />

          <S.HeaderContainer>
            <h3>{isMe ? "내 통계" : `${userInfo.nickname}님의 통계`}</h3>
            <Divider style={{ backgroundColor: "#EFEFEF" }} />
          </S.HeaderContainer>
          <UserWalkRecord userInfo={userInfo} />

          {isPrivateUser ? (
            <S.AlertContainer>기록이 존재하지 않습니다</S.AlertContainer>
          ) : (
            <>
              <S.HeaderContainer>
                <h3>{isMe ? "내 산책" : `${userInfo.nickname}님의 산책`}</h3>
                <Divider style={{ backgroundColor: "#EFEFEF" }} />
              </S.HeaderContainer>
              {boardList.map(({ title, urlLink, recordList, type, visible }, index) => {
                if (!isMe && visible === "Private") return <></>;

                return (
                  <MyRecordList
                    key={index}
                    title={title}
                    urlLink={urlLink}
                    recordList={recordList}
                    type={type}
                    userInfo={userInfo}
                  />
                );
              })}
            </>
          )}
        </S.UserProfileLayout>
      </S.UserProfileContainer>
    </>
  );
};

export default MyPageView;
