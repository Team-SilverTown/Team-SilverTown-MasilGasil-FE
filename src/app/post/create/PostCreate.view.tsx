"use client";

import * as S from "./PostCreate.styles";

import usePostCreateController from "./PostCreate.controller";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import MasilMap from "@/components/MasilMap/MasilMap";

const PostCreateView = () => {
  const { pageStep, center, handleFallback } = usePostCreateController();

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
    </S.PostCreateLayout>
  );
};

export default PostCreateView;
