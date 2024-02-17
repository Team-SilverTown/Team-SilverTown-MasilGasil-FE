"use client";

import * as S from "./UserInfo.styles";
import Image from "next/image";
import userProfile from "@/assets/userProfile.svg";

interface UserInfoProfileProps {
  profileImage: string | null;
  profileName: string;
  profileMessage: string;
  width?: number;
  height?: number;
}

const UserInfoProfile = ({
  profileImage,
  profileName,
  profileMessage,
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
      </S.UserInfoProfileImage>
      <S.UserInfoProfileText>
        <strong>{profileName}</strong>
        <p>{profileMessage}</p>
      </S.UserInfoProfileText>
    </S.UserInfoProfile>
  );
};

export default UserInfoProfile;
