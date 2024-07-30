"use client";

import Lottie from "react-lottie";

import tailwindConfig from "@/../tailwind.config";
import Button from "@/components/Button";
import ModalLayout from "@/components/Modal/ModalLayout";
import { Message } from "@/components/icons";
import { useUI } from "@/components/uiContext/UiContext";

import ACCESS_LOGIN_ANIMATION from "./AccessLoginAnimationData.json";

import { signIn } from "next-auth/react";
import resolveConfig from "tailwindcss/resolveConfig";

const AccessLoginModal = () => {
  const { closeModal, showLoadingSpinner } = useUI();

  const { theme } = resolveConfig(tailwindConfig);

  return (
    <ModalLayout>
      <section className="flex w-[30rem] select-none flex-col gap-[1rem]  pt-[2rem]">
        <Lottie
          options={{
            loop: false,
            autoplay: true,
            animationData: ACCESS_LOGIN_ANIMATION,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={180}
          width={200}
          isClickToPauseDisabled={true}
        />

        <p className="mb-6 w-full whitespace-pre-line text-center text-h6 font-bold leading-[2.6rem]">
          {"해당 서비스는 로그인하신 후 \n 이용하실 수 있습니다."}
        </p>

        <Button
          buttonColor={"#FEE500"}
          width="100%"
          style={{ margin: "auto", borderRadius: 12, padding: "1.5rem 1.5rem" }}
          useRipple
          onClickHandler={() => {
            showLoadingSpinner();
            signIn("kakao", { redirect: true, callbackUrl: "/auth/kakao" });
          }}
        >
          <Message className="mr-2 h-7 w-7" />
          <span className="text-large font-medium ">카카오 로그인</span>
        </Button>

        <Button
          buttonColor={theme.colors.gray_300}
          textColor={theme.colors.text_secondary_color}
          width="100%"
          style={{ margin: "auto", borderRadius: 12, padding: "1.5rem 1.5rem" }}
          useRipple
          onClickHandler={() => {
            closeModal();
          }}
        >
          <span className="text-large font-medium ">닫기</span>
        </Button>
      </section>
    </ModalLayout>
  );
};

export default AccessLoginModal;
