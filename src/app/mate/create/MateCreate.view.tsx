"use client";

import { Dispatch, SetStateAction, MouseEvent } from "react";
import { UseFormRegister } from "react-hook-form";

import { Input, Textarea, Button } from "@/components";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";

import { useUI } from "@/components/uiContext/UiContext";
import { MateGatheringPlace } from "@/types/OriginDataType";

import useTheme from "@/lib/hooks/useTheme";
import * as GS from "@/styles/GlobalStyle";

import * as S from "./MateCreate.styles";
import { regularFields } from "./MateCreate.constants";

import { CalendarDatePicker, OptionTimePicker } from "./components";
import { DefaultTheme } from "styled-components";
import { MateCreateRequest } from "@/types/Request";

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
}: MateCreateViewProps) => {
  const theme = useTheme();

  const { setModalView, openModal } = useUI();

  const handleOpenLocationModal = () => {
    setModalView("MATE_CREATE_MAP_VIEW");
    openModal({
      baseLocation: { lat: 37.497, lng: 127.0254 },
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
