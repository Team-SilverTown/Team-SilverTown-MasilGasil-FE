import * as S from "./SettingContent.styles";

import React, { MouseEvent } from "react";

import { Button } from "@/components";
import { Switch } from "@/components/ShadcnUi/ui/switch";
import { ChevronRight } from "@/components/icons";

import { OnClickSettings, SwitchType } from "../../UserSetting.types";

interface UserSettingContentProps {
  icon: React.ReactNode;
  text: string;
  disable?: boolean;
  onClick: OnClickSettings;

  isSwitch?: boolean;
  isCheckedSwitch?: boolean;
  switchType?: SwitchType;
}

const UserSettingContent = ({
  icon,
  text,
  disable,
  onClick,

  isSwitch,
  switchType,
  isCheckedSwitch,
}: UserSettingContentProps) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (disable) {
      return;
    }

    if (switchType) {
      onClick(switchType);
      return;
    }

    e.preventDefault();
    onClick();
  };

  return (
    <S.SettingContent onClick={handleClick}>
      <S.SettingLabel htmlFor={`SwitchId-${switchType}`}>
        <S.SettingIcon>{icon}</S.SettingIcon>
        <S.SettingText>{text}</S.SettingText>
      </S.SettingLabel>

      {isSwitch && (
        <Switch
          disabled={disable}
          id={`SwitchId-${switchType}`}
          checked={isCheckedSwitch}
        />
      )}

      {!isSwitch && (
        <Button
          disabled={disable}
          variant="naked"
          style={{ width: "2.8rem", height: "2.8rem", padding: 0, margin: 0 }}
        >
          <ChevronRight style={{ width: "2.8rem", height: "2.8rem" }} />
        </Button>
      )}
    </S.SettingContent>
  );
};

export default UserSettingContent;
