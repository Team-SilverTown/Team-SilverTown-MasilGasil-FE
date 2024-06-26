"use client";

import * as S from "./MateCreate.styles";
import * as GS from "@/styles/GlobalStyle";
import { DefaultTheme } from "styled-components";

import { Dispatch, MouseEvent, SetStateAction } from "react";
import { UseFormRegister } from "react-hook-form";

import { Button, Input, Textarea } from "@/components";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { useUI } from "@/components/uiContext/UiContext";
import useTheme from "@/lib/hooks/useTheme";
import { GeoPosition, MateGatheringPlace } from "@/types/OriginDataType";
import { MateCreateRequest } from "@/types/Request";

import { regularFields } from "./MateCreate.constants";
import { CalendarDatePicker, OptionTimePicker } from "./components";

interface MateCreateViewProps {
  register: UseFormRegister<MateCreateRequest>;
  handleSubmit: () => void;
  isFormFilled: boolean;
  handleCapacityChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  startDate: Date | null;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  startTime: Date | null;
  setStartTime: Dispatch<SetStateAction<Date | null>>;
  capacity: string;
  gatheringPlaceDetail: string;
  handleGatheringPlaceSubmit: (location: MateGatheringPlace) => void;
  postStartPoint: GeoPosition;
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
  handleCapacityChange,
  startDate,
  setStartDate,
  startTime,
  setStartTime,
  capacity,
  gatheringPlaceDetail,
  handleGatheringPlaceSubmit,
  postStartPoint,
}: MateCreateViewProps) => {
  const theme = useTheme();

  const { setModalView, openModal } = useUI();
  const handleOpenLocationModal = () => {
    setModalView("MATE_CREATE_MAP_VIEW");
    openModal({
      baseLocation: postStartPoint,
      locationDetail: gatheringPlaceDetail,
      onSubmit: handleGatheringPlaceSubmit,
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
            {field.name === "content" && (
              <Textarea
                placeholder={field.placeholder}
                register={register(field.name)}
                style={{
                  fontSize: "1.5rem",
                }}
              />
            )}
            {field.name === "gatheringPlaceDetail" && (
              <S.OpenModal
                onClick={handleOpenLocationModal}
                $isSelected={!!gatheringPlaceDetail}
              >
                {gatheringPlaceDetail || field.placeholder}
              </S.OpenModal>
            )}
            {field.name === "date" && (
              <S.DatePickerWrapper>
                <CalendarDatePicker
                  startDate={startDate}
                  setStartDate={setStartDate}
                />
              </S.DatePickerWrapper>
            )}
          </S.Section>
        ))}
        <S.Section>
          <S.Title>희망 시간</S.Title>
          <S.DatePickerWrapper>
            <OptionTimePicker
              startTime={startTime}
              setStartTime={setStartTime}
            />
          </S.DatePickerWrapper>
        </S.Section>
        <S.Section>
          <S.Title>모집 인원</S.Title>
          <S.PersonnelSelect
            value={capacity}
            onChange={handleCapacityChange}
            $isSelected={capacity !== ""}
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
