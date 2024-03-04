import * as GS from "./MateMapModal.styles";

import { ModalLayout } from "@/components/Modal";

interface MateMapModalProps {
  onClickMap: () => void;
}

interface ModalProp {
  props: MateMapModalProps;
}

const MateCreateMapModal = ({}: ModalProp) => {
  return (
    <ModalLayout
      style={{
        paddingRight: "1rem",
        paddingLeft: "1rem",
        paddingBottom: "1rem",
        paddingTop: "4.6rem",
      }}
    >
      <GS.MapModalLayout>
        <GS.MapWrapper></GS.MapWrapper>
      </GS.MapModalLayout>
    </ModalLayout>
  );
};

export default MateCreateMapModal;
