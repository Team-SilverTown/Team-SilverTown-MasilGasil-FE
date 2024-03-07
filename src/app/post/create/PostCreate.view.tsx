"use client";

import * as S from "./PostCreate.styles";

import usePostCreateController from "./PostCreate.controller";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import MasilMap from "@/components/MasilMap/MasilMap";
import { ArrowForward } from "@/components/icons";
import useTheme from "@/lib/hooks/useTheme";
import { PostPinEdit, PostTextEdit } from "./components";

const PostCreateView = () => {
  const theme = useTheme();
  const { isOpenBottom, handleToggleBottomSheet, postData, pageStep, center, handleFallback } =
    usePostCreateController();

  return (
    <S.PostCreateLayout>
      <TopNavigator leftChildren={<GoBackButton onGoBackHandler={handleFallback} />} />

      <S.PostCreateMapWrapper>
        <MasilMap
          center={center}
          isShowCenterMarker={false}
          path={postData.path}
          pins={postData.pins}
        />
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
