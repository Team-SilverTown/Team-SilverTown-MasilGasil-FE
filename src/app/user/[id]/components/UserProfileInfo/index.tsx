"use client";

import { useState } from "react";
import Image from "next/image";
import { useUI } from "@/components/uiContext/UiContext";
import userProfile from "@/assets/userProfile.svg";
import Camera from "@/components/icons/Camera";
import * as S from "./UserProfileInfo.styles";

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
  const { openModal, setModalView, closeModal } = useUI();

  const handlePropfileEdit = () => {
    setModalView("PROFILE_EDIT_VIEW");
    openModal({
      onClickAccept: (profileImage: string | null) => {
        setProfile(profileImage);
        closeModal();
      },
    });
  };

  return (
    <S.UserInfoProfile>
      <S.UserInfoProfileImage
        width={width}
        height={height}
        onClick={handlePropfileEdit}
      >
        <Image
          src={profile ? profile : userProfile}
          alt={profileName}
          width={width}
          height={height}
        />
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
