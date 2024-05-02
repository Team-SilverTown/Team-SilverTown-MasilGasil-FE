import style from "./LogPin.style.module.css";

import { DotIndicator, PinDetailCard } from "@/components";
import { Pin } from "@/types/OriginDataType";

import Carousel from "nuka-carousel";

interface LogPinProps {
  pins: Pin[];
  currentPinIndex: number;
  handlePinIndex: (index: number) => void;
}

const LogPin = ({ pins, currentPinIndex, handlePinIndex }: LogPinProps) => {
  return (
    <div>
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
                className={style.pinDetailCard}
                key={index}
                content={pin.content}
                thumbnailUrl={pin.thumbnailUrl}
                currentPinindex={currentPinIndex + 1}
                totalPinIndex={pins.length}
                pin={pin}
              />
            ))}
          </Carousel>
          <DotIndicator
            current={currentPinIndex}
            length={pins.length}
          />
        </>
      )}

      {pins.length === 0 && <div className="px-0 py-[3rem] text-center">등록된 핀이 없습니다.</div>}
    </div>
  );
};

export default LogPin;
