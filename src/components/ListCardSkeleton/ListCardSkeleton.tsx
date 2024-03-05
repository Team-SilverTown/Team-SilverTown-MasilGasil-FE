import * as S from "./ListCardSkeleton.styles";

interface ListCardSkeletonProps {
  repeat?: number;
}

const ListCardSkeleton = ({ repeat = 1 }: ListCardSkeletonProps) => {
  return (
    <>
      {Array.from({ length: repeat }).map((_, index) => {
        return (
          <S.ListCardContainer key={index}>
            <S.ListCardThumbnail>
              <S.ListCardShimmer />
            </S.ListCardThumbnail>
            <S.ListCardContent>
              <S.ListCardContentWrapper>
                <S.ListCardInfo>
                  <S.ListCardShimmer />
                </S.ListCardInfo>
                <S.ListCardInfo>
                  <S.ListCardShimmer />
                </S.ListCardInfo>
              </S.ListCardContentWrapper>
              <S.ListCardContentWrapper>
                <S.ListCardInfo>
                  <S.ListCardShimmer />
                </S.ListCardInfo>
                <S.ListCardInfo>
                  <S.ListCardShimmer />
                </S.ListCardInfo>
              </S.ListCardContentWrapper>
            </S.ListCardContent>
          </S.ListCardContainer>
        );
      })}
    </>
  );
};
export default ListCardSkeleton;
