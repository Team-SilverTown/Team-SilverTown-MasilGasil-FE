import { Z_INDEX } from "@/styles/theme";

import Sheet from "@/components/BottomSheet";
import SheetLayout from "@/components/BottomSheet/sheet";

const BottomSheet_Storybook = () => {
  return (
    <section className="w-[50rem] h-[80rem] overflow-hidden">
      <SheetLayout
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        isOpen={true}
        onClose={() => null}
        fixedHeight={0.66}
        initialSnap={1}
        snapPoints={[0.844, 0.552]}
        style={{
          zIndex: Z_INDEX.BOTTOM_SHEET,
          width: "100%",
        }}
      >
        <Sheet.Container
          className="bg-red"
          style={{
            maxWidth: 500,
            left: "50%",
            translateX: "-50%",
            boxShadow: "0 2px 7.8px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <Sheet.Header />
          <Sheet.Content
            style={{
              width: "100%",
              height: "100%",
            }}
          ></Sheet.Content>
        </Sheet.Container>
      </SheetLayout>
    </section>
  );
};

export default BottomSheet_Storybook;
