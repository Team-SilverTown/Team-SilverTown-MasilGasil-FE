"use client";

import { Dispatch, SetStateAction, MouseEvent } from "react";
import { UseFormRegister } from "react-hook-form";

import { Input, Textarea, Button } from "@/components";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import Image from "@/components/icons/Image";
import { useUI } from "@/components/uiContext/UiContext";
import { MateGatheringPlace } from "@/types/OriginDataType";
import Theme from "@/styles/theme";
import useTheme from "@/lib/hooks/useTheme";
import * as GS from "@/styles/GlobalStyle";

import * as S from "./MateCreate.styles";
import { MateCreateProps } from "./MateCreate.controller";
import { regularFields } from "./MateCreate.constants";

import { CalendarDatePicker, OptionTimePicker } from "./components";
import { DefaultTheme } from "styled-components";
import InputUpload from "@/components/InputUpload/InputUpload";

interface MateCreateViewProps {
  register: UseFormRegister<MateCreateProps>;
  handleSubmit: () => void;
  isFormFilled: boolean;
  updateThumbnail: (file: File | null) => void;
  handlePersonnelChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  startDate: Date | null;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  startTime: Date | null;
  setStartTime: Dispatch<SetStateAction<Date | null>>;
  selectedPersonnel: string;
  locationDetail: string;
  onLocationSubmit: (location: MateGatheringPlace) => void;
}

interface MateCreateButtonProps {
  onClickHandler: () => void;
  isDisabled: boolean;
  theme: DefaultTheme | undefined;
}

const MateCreateButton = ({ onClickHandler, isDisabled, theme }: MateCreateButtonProps) => (
  <Button
    type="button"
    onClick={onClickHandler}
    buttonColor={theme?.green_500}
    textColor={theme?.text_secondary_color}
    width={"100%"}
    disabled={isDisabled}
  >
    <span className="text-3xl font-bold">메이트 모집하기</span>
  </Button>
);

const MateCreateView = ({
  register,
  handleSubmit,
  isFormFilled,
  updateThumbnail,
  handlePersonnelChange,
  startDate,
  setStartDate,
  startTime,
  setStartTime,
  selectedPersonnel,
  locationDetail,
  onLocationSubmit,
}: MateCreateViewProps) => {
  const theme = useTheme();

  const { setModalView, openModal } = useUI();

  const handleOpenLocationModal = () => {
    setModalView("MATE_CREATE_MAP_VIEW");
    openModal({
      baseLocation: { lat: 37.497, lng: 127.0254 },
      locationDetail: locationDetail,
      onSubmit: onLocationSubmit,
    });
  };

  return (
    <S.MateCreateContainer>
      <TopNavigator
        title="메이트 모집하기"
        leftChildren={<GoBackButton />}
      />

      <GS.CommonContainer>
        {regularFields.map((field, index) => (
          <S.Section key={index}>
            <S.Title>{field.title}</S.Title>
            {field.name === "title" && (
              <Input
                placeholder={field.placeholder}
                register={register(field.name)}
                style={{
                  lineHeight: "2rem",
                  fontSize: "1.5rem",
                }}
              />
            )}
            {field.name === "thumbnail" && (
              <InputUpload updateFile={updateThumbnail}>
                <S.PinEditThumbnail>
                  <Image
                    width={40}
                    fill={Theme.lightTheme.gray_300}
                  />
                  클릭하여 썸네일 업로드
                </S.PinEditThumbnail>
              </InputUpload>
            )}
            {field.name === "content" && (
              <Textarea
                placeholder={field.placeholder}
                register={register(field.name)}
                style={{
                  fontSize: "1.5rem",
                }}
              />
            )}
            {field.name === "location" && (
              <S.OpenModal
                onClick={handleOpenLocationModal}
                $isSelected={!!locationDetail}
              >
                {locationDetail || field.placeholder}
              </S.OpenModal>
            )}
            {field.name === "date" && (
              <CalendarDatePicker
                startDate={startDate}
                setStartDate={setStartDate}
              />
            )}
          </S.Section>
        ))}

        <S.FlexContainer>
          <S.Section>
            <S.Title>희망 시간</S.Title>
            <OptionTimePicker
              startTime={startTime}
              setStartTime={setStartTime}
            />
          </S.Section>

          <S.Section>
            <S.Title>모집 인원</S.Title>
            <S.PersonnelSelect
              value={selectedPersonnel}
              onChange={handlePersonnelChange}
              $isSelected={selectedPersonnel !== ""}
            >
              <option value="">인원을 선택해주세요.</option>
              <option value="0">상관 없음</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option
                  key={i + 1}
                  value={i + 1}
                >
                  {i + 1}명
                </option>
              ))}
            </S.PersonnelSelect>
          </S.Section>
        </S.FlexContainer>

        <MateCreateButton
          onClickHandler={handleSubmit}
          isDisabled={!isFormFilled}
          theme={theme}
        />
      </GS.CommonContainer>
    </S.MateCreateContainer>
  );
};

export default MateCreateView;
