import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalLayout } from "@/components/Modal";
import Image from "@/components/icons/Image";
import { Button } from "@/components";
import InputUpload from "@/components/InputUpload/InputUpload";
import * as S from "./ProfileEditModal.styles";
import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

interface ProfileEditModalProps {
  onClickAccept: (ProfileImage: string | null) => void;
}

interface ModalProp {
  props: ProfileEditModalProps;
}

const PinEditModal = ({ props }: ModalProp) => {
  const { onClickAccept } = props;
  const { register, setValue, watch, getValues } = useForm();

  const [profileImage, setProfileImage] = useState("");

  const imageFile = watch("profile");

  useEffect(() => {
    if (!(imageFile instanceof File)) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setProfileImage(reader.result);
      }
    };

    reader.readAsDataURL(imageFile);
  }, [imageFile]);

  return (
    <ModalLayout modalTitle="프로필 이미지 수정">
      <S.ProfileEditLayout>
        <InputUpload
          register={register("profile")}
          name="profile"
          setValue={setValue}
        >
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
          onClickHandler={() => {
            onClickAccept(profileImage);
          }}
        >
          수정 완료
        </Button>
      </S.ProfileEditLayout>
    </ModalLayout>
  );
};

export default PinEditModal;
