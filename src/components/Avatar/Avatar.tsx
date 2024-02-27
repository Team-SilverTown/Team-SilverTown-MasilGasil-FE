"use client";

import { CSSProperties } from "react";
import Image from "next/image";
import userProfile from "@/assets/userProfile.svg";
import * as S from "./Avatar.styles";

interface AvatarProps {
  size?: "xs" | "sm" | "md" | "lg";
  name?: string;
  src?: string;
  style?: CSSProperties;
}

const AvatarSize = {
  xs: 30,
  sm: 50,
  md: 100,
  lg: 120,
};

const Avatar = ({ size = "xs", name = "프로필 이미지", src = userProfile, style }: AvatarProps) => {
  return (
    <S.AvatarLayout
      $size={AvatarSize[size]}
      style={style}
    >
      <Image
        src={src}
        width={AvatarSize[size]}
        height={AvatarSize[size]}
        alt={name}
      />
    </S.AvatarLayout>
  );
};

export default Avatar;
