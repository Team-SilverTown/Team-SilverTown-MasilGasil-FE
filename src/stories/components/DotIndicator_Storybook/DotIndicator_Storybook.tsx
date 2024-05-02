import { useState } from "react";

import { Button, DotIndicator } from "@/components";

interface DotIndicatorProps_Storybook {
  current: number;
  length: number;
}

const DotIndicator_Storybook = ({ current, length }: DotIndicatorProps_Storybook) => {
  const [currentIndex, setCurrentIndex] = useState(current);
  const ButtonList = Array.from({ length }, (_, index) => index);

  return (
    <section className="flex flex-col gap-8">
      <article className="w-[40rem] h-[10rem] border-red border-2 flex items-center justify-center">
        <DotIndicator
          current={currentIndex}
          length={length}
        />
      </article>

      <article className="w-[40rem] h-[10rem] border-red border-2 flex flex-col items-center justify-center">
        <div className="w-full h-[50%] flex items-center justify-center gap-4">
          {ButtonList.map((label, index) => (
            <Button
              variant="flat"
              width={45}
              buttonColor="#E3E3E3"
              useRipple
              onClickHandler={() => setCurrentIndex(index)}
            >
              {label + 1}
            </Button>
          ))}
        </div>
      </article>
    </section>
  );
};

export default DotIndicator_Storybook;
