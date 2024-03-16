"use client";

import { CSSProperties, MouseEvent } from "react";
import Image from "next/image";
import userProfile from "@/assets/userProfile.svg";
import * as S from "./Avatar.styles";
import { useRouter } from "next/navigation";

interface AvatarProps {
  size?: "ms" | "xs" | "sm" | "md" | "lg";
  name?: string;
  src?: string | null;
  style?: CSSProperties;
  imageStyle?: CSSProperties;

  userId?: string;
}

const AvatarSize = {
  ms: 22,
  xs: 30,
  sm: 50,
  md: 100,
  lg: 120,
};

/**
 * @description 공통 Avatar 컴포넌트
 * @param size size는 Avatar의 width, height 값을 나타냅니다. (기본적으로 xs, sm, md, lg)로 정의되어 있습니다.
 *             아무 값도 정의하지 않을 경우 xs로 정의됩니다.
 * @param name name은 Image 태그의 alt 속성에 추가되는 설명입니다.
 * @param src src는 Avatar 이미지가 되는 주소입니다. (아무 값도 전달하지 않을 경우 기본 프로필이 정의됩니다.)
 * @param style 만약 정의되지 않은 size 혹은 style을 정의하고 싶다면 inline style로 style을 정의할 수 있습니다.
 * @param userId 사용하는곳에서 userId를 전달시 해당 id에 맞는 user 페이지로 이동시킵니다.
 */

const Avatar = ({
  size = "xs",
  name = "프로필 이미지",
  src = userProfile,
  style,
  imageStyle,
  userId,
}: AvatarProps) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!userId) {
      return;
    }

    router.push(`/user/${userId}`);
  };
  return (
    <S.AvatarLayout
      $size={AvatarSize[size]}
      style={{ ...style, cursor: userId ? "pointer" : "auto" }}
      onClick={handleClick}
    >
      <Image
        src={src ? src : userProfile}
        width={AvatarSize[size]}
        height={AvatarSize[size]}
        alt={name}
        style={imageStyle}
      />
    </S.AvatarLayout>
  );
};

export default Avatar;
