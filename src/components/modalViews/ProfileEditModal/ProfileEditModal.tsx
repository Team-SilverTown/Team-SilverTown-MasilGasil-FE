import * as S from "./ProfileEditModal.styles";
import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

import { useState } from "react";

import { Button } from "@/components";
import InputUpload from "@/components/InputUpload/InputUpload";
import { ModalLayout } from "@/components/Modal";
import Image from "@/components/icons/Image";

interface ProfileEditModalProps {
  onClickAccept: (ProfileImage: string | null) => void;
}

interface ModalProp {
  props: ProfileEditModalProps;
}

const PinEditModal = ({ props }: ModalProp) => {
  const { onClickAccept } = props;
  const [profileImage, setProfileImage] = useState("");

  const handleProfileImage = (file: File | null) => {
    if (!(file instanceof File)) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setProfileImage(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  const handleChangeProfileImage = () => {
    if (profileImage) {
      onClickAccept(profileImage);
      return;
    }

    alert("업로드한 이미지가 존재하지 않습니다.");
  };

  return (
    <ModalLayout modalTitle="프로필 이미지 수정">
      <S.ProfileEditLayout>
        <InputUpload updateFile={handleProfileImage}>
          <S.ProfileEditThumbnail>
            {profileImage ? (
              <S.ProfileImage $src={profileImage} />
            ) : (
              <>
                <Image
                  width={40}
                  fill={Theme.lightTheme.gray_300}
                />
                클릭하여 썸네일 업로드
              </>
            )}
          </S.ProfileEditThumbnail>
        </InputUpload>
        <Button
          buttonColor={Theme.lightTheme.green_500}
          variant="neumorp"
          textColor={Theme.lightTheme.white}
          style={{
            fontWeight: FONT_WEIGHT.BOLD,
            fontSize: FONT_SIZE.LARGE,
          }}
          onClickHandler={handleChangeProfileImage}
        >
          수정 완료
        </Button>
      </S.ProfileEditLayout>
    </ModalLayout>
  );
};

export default PinEditModal;
