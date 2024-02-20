import { useAddonState } from "@storybook/manager-api";
import Carousel from "nuka-carousel";

import { DotIndicator, PinDetailCard } from "@/components";

export default {
  title: "Component/DotIndicator",
  component: DotIndicator,
  argTypes: { slideIdx: { control: { type: "number", min: 0, max: 5 } } },
  args: {
    slideIdx: 0,
  },
};

export const Default = (args: any) => {
  const data = [
    {
      width: 390,
      height: 200,
      borderRadius: 8,
      title: "산책로 매력 포인트 1",
      content: "이러쿵 저러쿵 뭔가 이쁜 부분이 있어서 사진이랑 남겨봅니다. 으하하하",
      thumbnailURL:
        "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
      currentPinIndex: 1,
      totalPinIndex: 5,
    },
    {
      width: 390,
      height: 200,
      borderRadius: 8,
      title: "산책로 매력 포인트 1",
      content: "이러쿵 저러쿵 뭔가 이쁜 부분이 있어서 사진이랑 남겨봅니다. 으하하하",
      thumbnailURL:
        "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
      currentPinIndex: 1,
      totalPinIndex: 5,
    },
    {
      width: 390,
      height: 200,
      borderRadius: 8,
      title: "산책로 매력 포인트 1",
      content: "이러쿵 저러쿵 뭔가 이쁜 부분이 있어서 사진이랑 남겨봅니다. 으하하하",
      thumbnailURL:
        "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
      currentPinIndex: 1,
      totalPinIndex: 5,
    },
    {
      width: 390,
      height: 200,
      borderRadius: 8,
      title: "산책로 매력 포인트 1",
      content: "이러쿵 저러쿵 뭔가 이쁜 부분이 있어서 사진이랑 남겨봅니다. 으하하하",
      thumbnailURL:
        "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
      currentPinIndex: 1,
      totalPinIndex: 5,
    },
    {
      width: 390,
      height: 200,
      borderRadius: 8,
      title: "산책로 매력 포인트 1",
      content: "이러쿵 저러쿵 뭔가 이쁜 부분이 있어서 사진이랑 남겨봅니다. 으하하하",
      thumbnailURL:
        "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
      currentPinIndex: 1,
      totalPinIndex: 5,
    },
    {
      width: 390,
      height: 200,
      borderRadius: 8,
      title: "산책로 매력 포인트 1",
      content: "이러쿵 저러쿵 뭔가 이쁜 부분이 있어서 사진이랑 남겨봅니다. 으하하하",
      thumbnailURL:
        "https://github.com/SeungHyune/first-script/assets/114329713/7842e910-8956-43f2-86a4-2c953cb4be04",
      currentPinIndex: 1,
      totalPinIndex: 5,
    },
  ];

  // const [slideIdx, setSlideIdx] = useState(0);

  return (
    <div style={{ width: 390 }}>
      <Carousel
        withoutControls={true}
        slideIndex={args.slideIdx}
        // beforeSlide={(_, v) => setSlideIdx(v)}
      >
        {data.map((d, i) => (
          <PinDetailCard
            content={d.content}
            currentPinindex={i + 1}
            thumbnailURL={d.thumbnailURL}
            title={d.title}
            totalPinIndex={data.length}
            borderRadius={8}
            height={200}
            width={390}
          />
        ))}
      </Carousel>
      {/* CAROUSEL CONTROLLER */}
      <div style={{ marginTop: 8 }}>
        <DotIndicator
          current={args.slideIdx}
          length={data.length}
        />
      </div>
    </div>
  );
};
