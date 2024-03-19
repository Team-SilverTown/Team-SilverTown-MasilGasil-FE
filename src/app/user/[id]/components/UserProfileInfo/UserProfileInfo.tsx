"use client";

import * as S from "./UserProfileInfo.styles";
import Image from "next/image";
import { useState } from "react";

import userProfile from "@/assets/userProfile.svg";
import Camera from "@/components/icons/Camera";
import InputUpload from "@/components/InputUpload/InputUpload";
import { useMutation } from "@tanstack/react-query";
import { changeProfileImage, getMe } from "@/lib/api/User/client";
import { USER_KEY } from "@/lib/api/queryKeys";
import { useToast } from "@/components/ShadcnUi/ui/useToast";
import useMeStore from "@/stores/useMeStore";

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
  const { toast } = useToast();
  const { setMe } = useMeStore();

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
                    onSuccess: async () => {
                      toast({
                        title: "프로필 사진이 성공적으로 등록되었어요!",
                        duration: 2000,
                      });
                      setProfile(URL.createObjectURL(image));

                      const newMeData = await getMe();
                      setMe(newMeData);
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

      <S.UserInfoProfileText>
        <strong>{profileName}</strong>
      </S.UserInfoProfileText>
    </S.UserInfoProfile>
  );
};

export default UserInfoProfile;
