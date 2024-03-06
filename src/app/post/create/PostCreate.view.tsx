"use client";

import * as S from "./PostCreate.styles";

import usePostCreateController from "./PostCreate.controller";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import MasilMap from "@/components/MasilMap/MasilMap";
import { ArrowForward } from "@/components/icons";
import useTheme from "@/lib/hooks/useTheme";

const PostCreateView = () => {
  const theme = useTheme();
  const { isOpenBottom, handleToggleBottomSheet, pageStep, center, handleFallback } =
    usePostCreateController();

  return (
    <S.PostCreateLayout>
      <TopNavigator leftChildren={<GoBackButton onGoBackHandler={handleFallback} />} />

      <S.PostCreateMapWrapper>
        <MasilMap
          center={center}
          path={[]}
          pins={[]}
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

        <S.PostCreateSheetContent></S.PostCreateSheetContent>
      </S.PostCreateSheet>
    </S.PostCreateLayout>
  );
};

export default PostCreateView;
