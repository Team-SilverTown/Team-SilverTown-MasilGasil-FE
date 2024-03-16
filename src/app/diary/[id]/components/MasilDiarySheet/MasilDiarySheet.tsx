import Sheet from "@/components/BottomSheet";
import useTheme from "@/lib/hooks/useTheme";
import { Z_INDEX } from "@/styles/theme";
import DiaryItem from "../DiaryItem/DiaryItem";
import * as S from "./MasilDiarySheet.styles";
import { easeIn } from "framer-motion";
import { MasilsByPeriod } from "@/types/Response";

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
  const theme = useTheme();
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
        fixedHeight={0.53}
        initialSnap={1}
        snapPoints={[0.85, 0.38]}
        style={{
          zIndex: Z_INDEX.BOTTOM_SHEET,
        }}
      >
        <Sheet.Container
          style={{
            maxWidth: 600,
            left: "50%",
            translateX: "-50%",
            backgroundColor: theme?.background_color,
            boxShadow: "0 2px 7.8px 0 rgba(0, 0, 0, 0.1)",
          }}
        >
          <Sheet.Header />
          <Sheet.Content>
            <S.HeaderContainer>
              <S.Text>{`${year}년 ${month !== undefined && month + 1}월 ${day}일`}</S.Text>
              <S.SubText
                onClick={() => {
                  setIsSheetOpen(false);
                }}
              >
                닫기
              </S.SubText>
            </S.HeaderContainer>
            <S.ItemWrapper>
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
            </S.ItemWrapper>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
};

export default MasilDiarySheet;
