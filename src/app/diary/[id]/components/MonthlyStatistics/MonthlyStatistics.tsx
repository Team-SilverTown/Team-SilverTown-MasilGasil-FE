import style from "./MonthlyStatistics.style.module.css";

import { convertMeter } from "@/lib/utils";
import { MasilsByPeriodResponse } from "@/types/Response";

interface MonthlyStatisticsProps {
  month: number | undefined;
  masils: MasilsByPeriodResponse | undefined;
}

const MonthlyStatistics = ({ month, masils }: MonthlyStatisticsProps) => {
  const sectionItemStyle =
    "flex w-full min-w-[5rem] flex-col items-center justify-center gap-[0.5rem] py-[1rem] font-bold";
  const accentTitleStyle = "text-large font-bold text-green_300";
  const textStyle = "flex-wrap";
  const colDividerStyle = `h-[4rem] w-[1px] bg-gray_100 ${style.col_divider_component}`;

  return (
    <article className="w-full p-[1.25rem]">
      <div className="w-full rounded-[0.8rem] border-tine border-transparent_10 bg-white p-[2rem] shadow-[0_2px_7.8px_0_rgba(0,0,0,0.02)]">
        {month !== undefined && (
          <>
            <header
              className={`mb-[1.4rem] flex w-full items-end justify-between px-[0.5rem] ${style.header_component}`}
            >
              <h6 className="text-large font-bold">{month + 1}월의 산책 기록</h6>
              <span className={textStyle}>
                총
                <span className="font-bold text-green_300">
                  {masils && masils?.masils.length > 0 ? ` ${masils?.masils.length}일 ` : " 0일 "}
                </span>
                산책했어요
              </span>
            </header>
            <section
              className={`flex w-full flex-row items-center justify-around gap-[2rem] px-[1rem] ${style.section_component}`}
            >
              <div className={sectionItemStyle}>
                <>총 거리</>
                <span className={accentTitleStyle}>
                  {masils?.totalDistance ? convertMeter(masils?.totalDistance) : "0 m"}
                </span>
              </div>
              <div className={colDividerStyle} />
              <div className={sectionItemStyle}>
                <span className={textStyle}>산책 횟수</span>
                <span className={accentTitleStyle}>
                  {masils?.totalCounts ? masils?.totalCounts : "0 "}회
                </span>
              </div>
              <div className={colDividerStyle} />
              <div className={sectionItemStyle}>
                <span className={textStyle}>소모 칼로리</span>
                <span className={accentTitleStyle}>
                  {masils?.totalCalories ? masils?.totalCalories : "0 "}kcal
                </span>
              </div>
            </section>
          </>
        )}
      </div>
    </article>
  );
};

export default MonthlyStatistics;
