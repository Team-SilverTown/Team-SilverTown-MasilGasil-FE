import Sheet from "@/components/BottomSheet";
import useTheme from "@/lib/hooks/useTheme";
import { Z_INDEX } from "@/styles/theme";
import DiaryItem from "../DiaryItem/DiaryItem";
import * as S from "./MasilDiarySheet.styles";
import { easeIn } from "framer-motion";

interface MasilDiarySheetProps {
  isSheetOpen: boolean;
  masils: masilProps[] | null;
}

export interface masilProps {
  id: number;
  address: { depth1: string; depth2: string; depth3: string; depth4: string };
  content: string;
  thumbnailUrl: string;
  distance: number;
  totalTime: number;
  calorie: number;
}

const MasilDiarySheet = ({ isSheetOpen, masils }: MasilDiarySheetProps) => {
  const theme = useTheme();

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
        </Sheet.Container>
      </Sheet>
    </>
  );
};

export default MasilDiarySheet;
