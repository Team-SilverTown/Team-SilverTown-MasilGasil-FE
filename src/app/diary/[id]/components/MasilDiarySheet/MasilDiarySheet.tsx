import Sheet from "@/components/BottomSheet";
import useTheme from "@/lib/hooks/useTheme";
import { Z_INDEX } from "@/styles/theme";
import DiaryItem from "../DiaryItem/DiaryItem";
import * as S from "./MasilDiarySheet.styles";

interface MasilDiarySheetProps {
  isSheetOpen: boolean;
  masils?: masilProps[];
}

export interface masilProps {
  id: string;
  title: string;
  content: string;
  thumbnailUrl: string;
  distance: number;
  totalTime: number;

  // TODO: 위치정보도 넘어오면 좋을 듯
}

const MasilDiarySheet = ({ isSheetOpen, masils }: MasilDiarySheetProps) => {
  const theme = useTheme();

  return (
    <>
      <Sheet
        isOpen={isSheetOpen}
        onClose={() => null}
        fixedHeight={0.46}
        initialSnap={1}
        snapPoints={[0.85, 0.31]}
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
                  return <DiaryItem masil={masil} />;
                })
              : "기록이 존재하지 않습니다."}
          </S.ItemWrapper>
        </Sheet.Container>
      </Sheet>
    </>
  );
};

export default MasilDiarySheet;
