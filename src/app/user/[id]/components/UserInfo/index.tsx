"use client";

import * as S from "./UserInfo.styles";
import Image from "next/image";
import userProfile from "@/assets/userProfile.svg";
import Camera from "@/components/icons/Camera";

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
  return (
    <S.UserInfoProfile>
      <S.UserInfoProfileImage
        width={width}
        height={height}
      >
        <Image
          src={profileImage ? profileImage : userProfile}
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
