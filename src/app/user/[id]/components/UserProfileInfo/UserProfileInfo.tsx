"use client";

import * as S from "./UserProfileInfo.styles";
import Image from "next/image";
import { useState } from "react";

import userProfile from "@/assets/userProfile.svg";
import { Camera } from "@/components/icons";
import InputUpload from "@/components/InputUpload/InputUpload";
import { useMutation } from "@tanstack/react-query";
import { changeProfileImage, getMe } from "@/lib/api/User/client";
import { USER_KEY } from "@/lib/api/queryKeys";
import { useToast } from "@/components/ShadcnUi/ui/useToast";
import useMeStore from "@/stores/useMeStore";
import { useUI } from "@/components/uiContext/UiContext";

interface UserInfoProfileProps {
  profileImage: string | null;
  profileName: string;
  width?: number;
  height?: number;
  isMe: boolean | undefined;
}

const UserInfoProfile = ({
  profileImage,
  profileName,
  width = 120,
  height = 120,
  isMe,
}: UserInfoProfileProps) => {
  const [profile, setProfile] = useState(profileImage);
  const { toast } = useToast();
  const { setMe } = useMeStore();
  const { setModalView, openModal, closeModal } = useUI();

  const uploadImageMutation = useMutation({
    mutationKey: [USER_KEY.UPLOAD_IMAGE],
    mutationFn: ({ image }: { image: File }) => changeProfileImage({ image }),
  });

  return (
    <S.UserInfoProfile>
      {isMe ? (
        <S.UserInfoProfileImage
          width={width}
          height={height}
        >
          <S.UploadContainer>
            <InputUpload
              isPreview={false}
              updateFile={(image: File | null) => {
                if (!image) {
                  return;
                }

                uploadImageMutation.mutate(
                  { image },
                  {
                    onSuccess: async () => {
                      toast({
                        title: "프로필 사진이 성공적으로 등록되었어요!",
                        duration: 2000,
                      });
                      setProfile(URL.createObjectURL(image));

                      const newMeData = await getMe();
                      setMe(newMeData);
                    },
                    onError: ({ message }) => {
                      setModalView("ANIMATION_ALERT_VIEW");
                      openModal({
                        message:
                          message === "50016000"
                            ? "지원하지 않는 파일 형식입니다."
                            : "이미지 업로드에 실패했습니다. 다시 시도해주세요.",
                      });
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
                style={{
                  borderRadius: "50%",
                  width: "120px",
                  height: "120px",
                  backgroundColor: "white",
                }}
                priority
              />
            </InputUpload>
          </S.UploadContainer>

          <S.CameraIconLayout>
            <Camera />
          </S.CameraIconLayout>
        </S.UserInfoProfileImage>
      ) : (
        <S.UserInfoProfileImage
          width={width}
          height={height}
        >
          <Image
            src={profile ? profile : userProfile}
            alt={"user-profile"}
            width={width}
            height={height}
            style={{
              borderRadius: "50%",
              width: "120px",
              height: "120px",
              backgroundColor: "white",
              cursor: "default",
            }}
            priority
          />
        </S.UserInfoProfileImage>
      )}

      <S.UserInfoProfileText>
        <strong>{profileName ? profileName : "null"}</strong>
        {isMe && <S.IsMeBadge>me</S.IsMeBadge>}
      </S.UserInfoProfileText>
    </S.UserInfoProfile>
  );
};

export default UserInfoProfile;
