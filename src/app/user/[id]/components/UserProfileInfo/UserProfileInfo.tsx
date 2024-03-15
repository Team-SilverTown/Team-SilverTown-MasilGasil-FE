"use client";

import { useState } from "react";
import Image from "next/image";
import { useUI } from "@/components/uiContext/UiContext";
import userProfile from "@/assets/userProfile.svg";
import Camera from "@/components/icons/Camera";
import * as S from "./UserProfileInfo.styles";
import useImageUpload from "@/lib/hooks/useImageUpload";
import InputUpload from "@/components/InputUpload/InputUpload";
import { useMutation } from "@tanstack/react-query";
import { changeProfileImage } from "@/lib/api/User/client";
import { USER_KEY } from "@/lib/api/queryKeys";

interface UserInfoProfileProps {
  profileImage: string | null;
  profileName: string;
  width?: number;
  height?: number;
}

const UserInfoProfile = ({
  profileImage,
  profileName,
  width = 120,
  height = 120,
}: UserInfoProfileProps) => {
  const [profile, setProfile] = useState(profileImage);

  const uploadImageMutation = useMutation({
    mutationKey: [USER_KEY.UPLOAD_IMAGE],
    mutationFn: ({ image }: { image: File }) => changeProfileImage({ image }),
  });

  return (
    <S.UserInfoProfile>
      <S.UserInfoProfileImage
        width={width}
        height={height}
      >
        <S.UploadContainer>
          <InputUpload
            isPreview={false}
            updateFile={(image: File | null) => {
              if (image)
                uploadImageMutation.mutate(
                  { image },
                  {
                    onSuccess: () => {
                      console.log("completed");
                      setProfile(URL.createObjectURL(image));
                    },
                  },
                );
            }}
          >
            <Image
              src={profile ? profile : userProfile}
              alt={" "}
              width={width}
              height={height}
              style={{ borderRadius: "50%", width: "120px", height: "120px" }}
              priority
            />
          </InputUpload>
        </S.UploadContainer>

        <S.CameraIconLayout>
          <Camera />
        </S.CameraIconLayout>
      </S.UserInfoProfileImage>

      <S.UserInfoProfileText>
        <strong>{profileName}</strong>
      </S.UserInfoProfileText>
    </S.UserInfoProfile>
  );
};

export default UserInfoProfile;
