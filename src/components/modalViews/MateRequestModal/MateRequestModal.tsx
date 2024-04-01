"use client";

import * as S from "./MateRequestModal.styles";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

import { useForm } from "react-hook-form";

import { Button, Textarea } from "@/components";
import { ModalLayout } from "@/components/Modal";
import { useUI } from "@/components/uiContext/UiContext";
import useTheme from "@/lib/hooks/useTheme";

interface MateParticipantModalProps {
  onAccept: (message: string) => void;
}

interface ModalProp {
  props: MateParticipantModalProps;
}

const MateRequestModal = ({ props }: ModalProp) => {
  const { onAccept } = props;
  const theme = useTheme();
  const { closeModal } = useUI();

  const { getValues, register } = useForm({ defaultValues: { message: "" } });

  const handleClickAccept = () => {
    onAccept(getValues("message"));
  };

  return (
    <ModalLayout>
      <S.MateRequestModalLayout>
        <S.MateRequestModalTitle>메이트 신청하기!</S.MateRequestModalTitle>

        <S.MateRequestModalDescription>
          메이트 신청사유를 작성해주세요.
        </S.MateRequestModalDescription>

        <Textarea
          register={register("message")}
          style={{ width: "100%", height: "10rem", marginBottom: "3.2rem" }}
        />

        <S.MateRequestModalActions>
          <Button
            variant="neumorp"
            buttonColor={theme?.green_500}
            textColor={theme?.text_secondary_color}
            style={{
              flexGrow: 1,
              whiteSpace: "nowrap",
              fontSize: FONT_SIZE.H6,
              fontWeight: FONT_WEIGHT.SEMIBOLD,
              userSelect: "none",
            }}
            onClickHandler={handleClickAccept}
          >
            신청
          </Button>
          <Button
            variant="neumorp"
            buttonColor={theme?.gray_200}
            textColor={theme?.text_secondary_color}
            style={{
              flexGrow: 1,
              whiteSpace: "nowrap",
              fontSize: FONT_SIZE.H6,
              fontWeight: FONT_WEIGHT.SEMIBOLD,
              userSelect: "none",
            }}
            onClickHandler={closeModal}
          >
            취소
          </Button>
        </S.MateRequestModalActions>
      </S.MateRequestModalLayout>
    </ModalLayout>
  );
};

export default MateRequestModal;
