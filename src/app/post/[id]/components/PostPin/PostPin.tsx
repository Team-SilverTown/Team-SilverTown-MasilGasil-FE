import * as S from "./PostPin.styles";

import { DotIndicator, PinDetailCard } from "@/components";
import { Pin } from "@/types/OriginDataType";

import Carousel from "nuka-carousel";

interface PostPinProps {
  pins: Pin[];
  currentPinIndex: number;
  handlePinIndex: (index: number) => void;
}

const PostPin = ({ pins, currentPinIndex, handlePinIndex }: PostPinProps) => {
  return (
    <S.PostPinContainer>
      {pins.length > 0 && (
        <>
          <Carousel
            withoutControls={true}
            slideIndex={currentPinIndex}
            beforeSlide={(_, v) => handlePinIndex(v)}
            style={{ paddingBottom: "1rem" }}
          >
            {pins.map((pin, index) => (
              <PinDetailCard
                key={index}
                content={pin.content}
                thumbnailUrl={pin.thumbnailUrl}
                currentPinindex={currentPinIndex + 1}
                totalPinIndex={pins.length}
                pin={pin}
                className="pinDetailCard"
              />
            ))}
          </Carousel>
          <DotIndicator
            current={currentPinIndex}
            length={pins.length}
          />
        </>
      )}
      {pins.length === 0 && <S.PostPinEmptyMessage>등록한 핀이 없습니다.</S.PostPinEmptyMessage>}
    </S.PostPinContainer>
  );
};

export default PostPin;
