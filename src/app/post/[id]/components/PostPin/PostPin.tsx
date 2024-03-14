import Carousel from "nuka-carousel";
import { DotIndicator, PinDetailCard } from "@/components";
import { Pin } from "@/types/OriginDataType";
import * as S from "./PostPin.styles";

interface PostPinProps {
  pins: Pin[];
  currentPinIndex: number;
  handlePinIndex: (index: number) => void;
}

const PostPin = ({ pins, currentPinIndex, handlePinIndex }: PostPinProps) => {
  return (
    <>
      {pins.length > 0 && (
        <>
          <Carousel
            withoutControls={true}
            slideIndex={currentPinIndex}
            afterSlide={handlePinIndex}
            style={{ padding: "1rem 0" }}
          >
            {pins.map((data, index) => (
              <PinDetailCard
                key={index}
                content={data.content}
                thumbnailUrl={data.thumbnailUrl}
                currentPinindex={currentPinIndex + 1}
                totalPinIndex={pins.length}
              />
            ))}
          </Carousel>
          <DotIndicator
            current={currentPinIndex}
            length={pins.length}
          />
        </>
      )}
      {pins.length === 0 && (
        <S.PostPinEmptyMessage>
          현재 산책로 경로에 등록된 핀이 존재하지 않습니다.
        </S.PostPinEmptyMessage>
      )}
    </>
  );
};

export default PostPin;
