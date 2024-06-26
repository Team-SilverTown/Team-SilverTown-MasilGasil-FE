"use client";

import * as S from "./PostCreate.styles";

import { Button } from "@/components";
import MasilMap from "@/components/MasilMap/MasilMap";
import { ArrowForward, Center } from "@/components/icons";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import useTheme from "@/lib/hooks/useTheme";

import usePostCreateController from "./PostCreate.controller";
import { PostPinEdit, PostTextEdit } from "./components";

const PostCreateView = () => {
  const theme = useTheme();
  const {
    isOpenBottom,
    handleToggleBottomSheet,
    mapCenter,
    postData,
    pageStep,
    currentPinIndex,
    handleFallback,
    handleClickPin,
    handleClickCenterButton,
  } = usePostCreateController();

  return (
    <S.PostCreateLayout>
      <TopNavigator
        containerStyle={{ backgroundColor: "transparent" }}
        leftChildren={<GoBackButton onGoBackHandler={handleFallback} />}
      />

      <S.PostCreateMapWrapper>
        <MasilMap
          center={mapCenter}
          isShowCenterMarker={false}
          path={postData.path}
          pins={postData.pins}
          onClickPin={handleClickPin}
          selectedPinIndex={currentPinIndex}
        />

        <Button
          style={{
            padding: "0.6rem",
            position: "absolute",
            bottom: "1.6rem",
            right: "0.8rem",
            boxShadow: "0 2px 7.8px 0 rgba(0, 0, 0, 0.2)",
          }}
          onClickHandler={handleClickCenterButton}
        >
          <Center size={28} />
        </Button>
      </S.PostCreateMapWrapper>
      <S.PostCreateSheet $isOpen={isOpenBottom}>
        <S.PostCreateSheetHeader onClick={handleToggleBottomSheet}>
          <ArrowForward
            size={32}
            style={{
              transform: `rotate(${isOpenBottom ? 90 : 270}deg)`,
              transition: "0.3s transform ease-in-out",
            }}
            fill={theme?.gray_300}
          />
        </S.PostCreateSheetHeader>

        <S.PostCreateSheetContentWrapper>
          {pageStep === "POST_CREATE_TEXT_EDIT" && <PostTextEdit />}

          {pageStep === "POST_CREATE_PIN_EDIT" && <PostPinEdit />}
        </S.PostCreateSheetContentWrapper>
      </S.PostCreateSheet>
    </S.PostCreateLayout>
  );
};

export default PostCreateView;
