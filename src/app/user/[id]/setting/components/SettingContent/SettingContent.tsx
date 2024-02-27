import React from "react";
import * as S from "./SettingContent.styles";

interface UserSettingContentProps {
  icon: React.ReactNode;
  text: string;
}

const UserSettingContent = ({ icon, text }: UserSettingContentProps) => {
  return (
    <S.SettingContent>
      <S.SettingIcon>{icon}</S.SettingIcon>
      <S.SettingText>{text}</S.SettingText>
    </S.SettingContent>
  );
};

export default UserSettingContent;
