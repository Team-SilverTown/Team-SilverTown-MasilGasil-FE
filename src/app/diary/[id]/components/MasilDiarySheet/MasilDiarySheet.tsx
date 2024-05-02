import Sheet from "@/components/BottomSheet";
import { MasilsByPeriod } from "@/types/Response";

import tailwindConfig from "../../../../../../tailwind.config";
import DiaryItem from "../DiaryItem/DiaryItem";

import { easeIn } from "framer-motion";
import resolveConfig from "tailwindcss/resolveConfig";

interface MasilDiarySheetProps {
  isSheetOpen: boolean;
  setIsSheetOpen: (value: boolean) => void;
  masils: MasilsByPeriod[] | null;
  date: Date | undefined;
}

export interface MasilProps {
  id: number;
  address: { depth1: string; depth2: string; depth3: string; depth4: string };
  content: string;
  thumbnailUrl: string;
  distance: number;
  totalTime: number;
  calorie: number;
}

const MasilDiarySheet = ({ isSheetOpen, setIsSheetOpen, masils, date }: MasilDiarySheetProps) => {
  const { theme } = resolveConfig(tailwindConfig);
  const [year, month, day] = [date?.getFullYear(), date?.getMonth(), date?.getDate()];

  return (
    <>
      <Sheet
        initial={{ y: "100%" }}
        animate={isSheetOpen ? { y: 0 } : { y: "100%" }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.4, type: "spring", damping: 14, ease: easeIn }}
        isOpen={isSheetOpen}
        onClose={() => null}
        fixedHeight={0.65}
        initialSnap={1}
        snapPoints={[0.85, 0.49, 0]}
        style={{
          zIndex: theme.zIndex["bottom_sheet"],
        }}
      >
        <Sheet.Container
          style={{
            maxWidth: 600,
            left: "50%",
            translateX: "-50%",
            backgroundColor: theme.colors["background_color"],
            boxShadow: "0 2px 7.8px 0 rgba(0, 0, 0, 0.1)",
          }}
        >
          <Sheet.Header />
          <Sheet.Content>
            <header className="flex items-center justify-between px-[3rem] py-[1rem]">
              <span className="font-bold text-gray_300">{`${year}년 ${month !== undefined && month + 1}월 ${day}일`}</span>
              <span
                className="cursor-pointer text-gray_300 underline"
                onClick={() => {
                  setIsSheetOpen(false);
                }}
              >
                닫기
              </span>
            </header>
            <div className="h-full overflow-y-auto px-[3rem] py-[1rem] pb-[8rem] text-center text-medium text-gray_300">
              {masils
                ? masils.map((masil) => {
                    return (
                      <DiaryItem
                        masil={masil}
                        key={masil.id}
                      />
                    );
                  })
                : "기록이 존재하지 않습니다"}
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
};

export default MasilDiarySheet;
