"use client";

import tailwindConfig from "@/../tailwind.config";
import { Button } from "@/components";
import { useUI } from "@/components/uiContext/UiContext";
import useAuthStore from "@/lib/stores/useAuthStore";

import { PostTabType } from "../../Post.types";

import Link from "next/link";
import resolveConfig from "tailwindcss/resolveConfig";

interface PostLinkButtonProps {
  tabIndex: PostTabType;
  postId: string;
  firstLat: number;
  firstLng: number;
}

const PostLinkButton = ({ tabIndex, postId, firstLat, firstLng }: PostLinkButtonProps) => {
  const { theme } = resolveConfig(tailwindConfig);
  const { isLogIn } = useAuthStore();

  const { openModal, setModalView } = useUI();

  const handleClickButton = () => {
    if (isLogIn) {
      return;
    }

    setModalView("ACCESS_LOGIN_VIEW");
    openModal();
  };

  return (
    <Link
      href={
        !isLogIn
          ? ""
          : tabIndex === PostTabType.Mate
            ? `/mate/create?postId=${postId}&lat=${firstLat}&lng=${firstLng}`
            : `/log/record?postId=${postId}`
      }
      onClick={handleClickButton}
    >
      <Button
        width="calc(100% - 4rem)"
        textColor={theme.colors.white}
        buttonColor={theme.colors.green_500}
        style={{
          position: "absolute",
          left: "50%",
          bottom: "9rem",
          transform: "translateX(-50%)",
          fontSize: `${theme.fontSize.large}`,
          fontWeight: `${theme.fontWeight.bold}`,
        }}
      >
        {tabIndex === PostTabType.Mate ? "메이트 모집하기" : "현재 경로로 산책하기"}
      </Button>
    </Link>
  );
};

export default PostLinkButton;
