import { convertMeter } from "@/lib/utils";
import { ProfileResponse } from "@/types/Response";

import NonAuthContainer from "../NonAuthContainer/NonAuthContainer";
import StatisticItem from "./components/StatisticItem/StatisticItem";
import VariableMessage from "./components/VariableMessage/VariableMessage";

interface StatisticContainerProps {
  userData: ProfileResponse;
}
const StatisticContainer = ({ userData }: StatisticContainerProps) => {
  const { totalDistance, totalCount, totalCalories } = userData;

  const statisticData = [
    { icon: "👟", label: "산책했어요", value: `${totalDistance}회` },
    { icon: "👣", label: "걸었어요", value: convertMeter(totalCount) },
    { icon: "🎽", label: "소모했어요", value: `${totalCalories}kcal` },
  ];

  if (!userData) {
    return <NonAuthContainer />;
  }

  return (
    <section className="inset-1 z-10 flex flex-col gap-[2rem] rounded-[3rem] bg-[#A4D24D] px-12 py-10 shadow-[inset_0px_0px_0px_4px_rgba(255,255,255,0.1)]">
      <header className="text-3xl">
        <p className="text-white">
          반가워요 <strong className="text-white">{userData.nickname}</strong>님,
        </p>
        <VariableMessage />
      </header>
      <section className="flex gap-4 overflow-x-auto scrollbar-hide">
        {statisticData.map(({ icon, label, value }, i) => (
          <StatisticItem
            key={i}
            icon={icon}
            label={label}
            value={value}
          />
        ))}
      </section>
    </section>
  );
};

export default StatisticContainer;
