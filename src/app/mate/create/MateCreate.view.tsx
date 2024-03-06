"use client";

import { UseFormRegister } from "react-hook-form";

import { Input, Textarea, Button } from "@/components";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import useTheme from "@/lib/hooks/useTheme";
import * as GS from "@/styles/GlobalStyle";

import * as S from "./MateCreate.styles";
import { MateCreateProps } from "./MateCreate.controller";

import { CalendarDatePicker, OptionTimePicker } from "./components";

interface MateCreateViewProps {
  register: UseFormRegister<MateCreateProps>;
  handleSubmit: () => void;
  isFormFilled: boolean;
  handlePersonnelChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  // startDate,
  // setStartDate,
  // startTime,
  // setStartTime,
  selectedPersonnel: string;
  // setSelectedPersonnel,
}

const regularFields = [
  { title: "제목", placeholder: "제목을 입력해주세요.", name: "title" },
  { title: "설명", type: "textarea", placeholder: "설명을 입력해주세요.", name: "content" },
  { title: "위치", placeholder: "모이는 위치를 입력해주세요.", name: "location" },
  { title: "희망 날짜", placeholder: "날짜를 입력해주세요.", name: "date" },
];

const MateCreateButton = ({ onClickHandler, isDisabled, theme }) => (
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
  handlePersonnelChange,
  startDate,
  setStartDate,
  startTime,
  setStartTime,
  selectedPersonnel,
  setSelectedPersonnel,
}: MateCreateViewProps) => {
  const theme = useTheme();

  return (
    <S.MateCreateContainer>
      <TopNavigator
        title="메이트 모집하기"
        leftChildren={<GoBackButton />}
      />

      <GS.CommonContainer>
        {regularFields.map((field, index) => (
          <S.Section>
            <S.Title>{field.title}</S.Title>
            {field.type === "textarea" && field.name !== "date" && (
              <Textarea
                placeholder={field.placeholder}
                register={register(field.name)}
                style={{
                  fontSize: "1.5rem",
                }}
              />
            )}
            {field.type !== "textarea" && field.name !== "date" && (
              <Input
                placeholder={field.placeholder}
                register={register(field.name)}
                style={{
                  lineHeight: "2rem",
                  fontSize: "1.5rem",
                }}
              />
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
              isSelected={selectedPersonnel !== ""}
            >
              <option value="">인원을 선택해주세요.</option>
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
