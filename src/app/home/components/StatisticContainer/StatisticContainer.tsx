import { convertMeter } from "@/lib/utils";
import { ProfileResponse } from "@/types/Response";

import StatisticItem from "../StatisticItem/StatisticItem";

interface StatisticContainerProps {
  userData: ProfileResponse;
}
const StatisticContainer = ({ userData }: StatisticContainerProps) => {
  const { totalDistance, totalCount, totalCalories } = userData;
  console.log(totalDistance, totalCount, totalCalories);

  const statisticData = [
    { icon: "👟", label: "산책했어요", value: `${totalDistance}회` },
    { icon: "👣", label: "걸었어요", value: convertMeter(totalDistance) },
    { icon: "🎽", label: "소모했어요", value: `${totalDistance}kcal` },
  ];

  return (
    <div className="inset-1 flex flex-col gap-[2rem] rounded-[3rem] bg-[#A4D24D] px-12 py-8 shadow-[inset_0px_0px_0px_4px_rgba(255,255,255,0.1)]">
      <div className="text-3xl ">
        <p className="text-white">
          반가워요 <b className="text-white">{userData.nickname}</b>님,
        </p>
        <p className="text-white">나른한 오후 마실 한 바퀴 어떠신가요?</p>
      </div>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {statisticData.map(({ icon, label, value }, i) => (
          <StatisticItem
            key={i}
            icon={icon}
            label={label}
            value={value}
          />
        ))}
      </div>
    </div>
  );
};

export default StatisticContainer;
