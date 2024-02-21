import * as S from "./Skeleton.styles";

interface SkeletonProps {
  repeat?: number;
}

const Skeleton = ({ repeat = 1 }: SkeletonProps) => {
  return (
    <>
      {Array.from({ length: repeat }).map((_, index) => {
        return (
          <S.Div key={index}>
            <S.Img>
              <S.Shimmer />
            </S.Img>
            <S.Wrap>
              <S.Flex>
                <S.Text>
                  <S.Shimmer />
                </S.Text>
                <S.Text>
                  <S.Shimmer />
                </S.Text>
              </S.Flex>
              <S.Flex>
                <S.Text>
                  <S.Shimmer />
                </S.Text>
                <S.Text>
                  <S.Shimmer />
                </S.Text>
              </S.Flex>
            </S.Wrap>
          </S.Div>
        );
      })}
    </>
  );
};
export default Skeleton;
