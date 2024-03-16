import Carousel from "nuka-carousel";
import { DotIndicator, PinDetailCard } from "@/components";
import { Pin } from "@/types/OriginDataType";
import * as S from "./LogPin.styles";

interface LogPinProps {
  pins: Pin[];
  currentPinIndex: number;
  handlePinIndex: (index: number) => void;
}

const LogPin = ({ pins, currentPinIndex, handlePinIndex }: LogPinProps) => {
  return (
    <S.LogPinContainer>
      <Carousel
        withoutControls={true}
        slideIndex={currentPinIndex}
        beforeSlide={(_, v) => handlePinIndex(v)}
        style={{ paddingBottom: "1rem" }}
      >
        {pins.map((data, index) => (
          <PinDetailCard
            key={index}
            content={data.content}
            thumbnailUrl={data.thumbnailUrl}
            currentPinindex={currentPinIndex + 1}
            totalPinIndex={pins.length}
            className="pinDetailCard"
          />
        ))}
      </Carousel>
      <DotIndicator
        current={currentPinIndex}
        length={pins.length}
      />
    </S.LogPinContainer>
  );
};

export default LogPin;
