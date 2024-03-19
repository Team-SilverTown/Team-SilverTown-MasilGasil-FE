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

      {pins.length === 0 && <S.LogPinEmptyMessage>등록된 핀이 없습니다.</S.LogPinEmptyMessage>}
    </S.LogPinContainer>
  );
};

export default LogPin;
