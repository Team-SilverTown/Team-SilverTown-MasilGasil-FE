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
    <S.PostPinContainer>
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
    </S.PostPinContainer>
  );
};

export default PostPin;
