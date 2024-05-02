"use client";

import { convertMeter, convertSeconds } from "@/lib/utils";
import { MasilsByPeriod } from "@/types/Response";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { useRouter } from "next/navigation";

const DiaryItem = ({ masil }: { masil: MasilsByPeriod; key?: number | string }) => {
  const { id, address, content, thumbnailUrl, distance, totalTime, calories } = masil;
  const formattedAddress = `${address.depth1} ${address.depth2} ${address.depth3} ${address.depth4}`;
  const formattedStatistics = `${convertMeter(distance)} ∙ ${convertSeconds(totalTime)} ∙ ${calories}kcal`;

  const route = useRouter();

  const handleClickItem = () => {
    route.push(`/log/${id}`);
  };

  const subTextStyle = "overflow-hidden text-ellipsis whitespace-nowrap text-gray_500";

  return (
    <div
      className="mb-[0.5rem] flex h-[10rem] w-full rounded-[1rem] border-tine border-transparent_10 bg-white"
      onClick={handleClickItem}
    >
      <Image
        src={thumbnailUrl}
        alt="masilThumbnail"
        width={100}
        height={100}
        style={{ borderRadius: "1rem 0rem 0rem 1rem" }}
      />
      <div className="flex h-full w-[75%] flex-col justify-center gap-[1rem] px-[1.5rem] py-[1rem] text-start">
        <h6 className=" overflow-hidden text-ellipsis whitespace-nowrap text-h6 font-bold">
          {content ? content : "내 산책기록"}
        </h6>
        <div className="flex flex-col gap-[0.4rem]">
          <p className={subTextStyle}>{formattedAddress}</p>
          <p className={subTextStyle}>{formattedStatistics}</p>
        </div>
      </div>
    </div>
  );
};

export default DiaryItem;
