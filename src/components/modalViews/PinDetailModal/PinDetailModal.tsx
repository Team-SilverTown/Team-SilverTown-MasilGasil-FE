"use client";

import * as S from "./PinDetailModal.styles";

import { ModalLayout } from "@/components/Modal";
import { Pin } from "@/types/OriginDataType";
import Image from "next/image";
import { Image as ImageIcon } from "@/components/icons";
import useTheme from "@/lib/hooks/useTheme";
import { Button } from "@/components";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { useUI } from "@/components/uiContext/UiContext";

interface PinDetailModalProps {
  pin: Pin;
}

interface ModalProp {
  props: PinDetailModalProps;
}

const PinDetailModal = ({ props }: ModalProp) => {
  const theme = useTheme();
  const { pin } = props;
  const { closeModal } = useUI();
  const { thumbnailUrl, content } = pin;
  return (
    <ModalLayout>
      <S.PinDetailModalLayout>
        {thumbnailUrl && (
          <S.PinDetailEmptyThumbnail>
            <Image
              src={thumbnailUrl}
              alt={`Pin Image`}
              sizes={"100%"}
              width={250}
              height={250}
              quality={100}
              priority
            />
          </S.PinDetailEmptyThumbnail>
        )}

        {!thumbnailUrl && (
          <S.PinDetailEmptyThumbnail>
            <ImageIcon
              width={40}
              fill={theme?.gray_300}
            />
          </S.PinDetailEmptyThumbnail>
        )}
        <S.PinDetailContentContainer>
          <S.PinDetailTitle>설명</S.PinDetailTitle>
          <S.PinDetailContent>{content}</S.PinDetailContent>
        </S.PinDetailContentContainer>

        <Button
          buttonColor={theme?.green_500}
          variant="neumorp"
          textColor={theme?.white}
          width={250}
          style={{
            fontWeight: FONT_WEIGHT.BOLD,
            fontSize: FONT_SIZE.LARGE,
          }}
          onClickHandler={closeModal}
        >
          닫기
        </Button>
      </S.PinDetailModalLayout>
    </ModalLayout>
  );
};

export default PinDetailModal;
