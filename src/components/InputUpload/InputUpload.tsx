"use client";

import React, { useRef, useState } from "react";
import { UseFormReturn, UseFormRegisterReturn } from "react-hook-form";
import Image from "next/image";
import { IMAGE_TYPES } from "./InputUpload.constants";
import * as S from "./InputUpload.styles";

interface InputUploadProps {
  position?: "relative" | "absolute";
  isPreview?: boolean;
  register: UseFormRegisterReturn;
  setValue: UseFormReturn["setValue"];
  name: string;
  children?: React.ReactNode;
  onPreview?: (preview: string | File, imageSize: { width: number; height: number }) => void;
}

const InputUpload = ({
  position = "absolute",
  isPreview = true,
  register,
  setValue,
  name,
  children,
  onPreview,
}: InputUploadProps) => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState({
    width: 0,
    height: 0,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const file = event.target.files[0];
    const fileType = file.type;

    if (!IMAGE_TYPES[fileType]) {
      alert("파일 형식이 올바르지 않습니다. 이미지 파일을 업로드해 주세요.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      const image = document.createElement("img");

      image.onload = () => {
        setImageSize({
          width: image.width,
          height: image.height,
        });

        if (typeof reader.result !== "string") {
          return;
        }

        if (onPreview) {
          onPreview(reader.result, { width: image.width, height: image.height });
        } else {
          setPreview(reader.result);
        }
      };

      if (typeof reader.result === "string") {
        image.src = reader.result;
      }
    };

    reader.readAsDataURL(file);
    setValue(name, file);
  };

  const handleImageClick = () => {
    inputRef.current?.click();
  };

  return (
    <S.InputUploadLayout>
      <S.InputUpload
        {...register}
        type="file"
        accept="image/*"
        style={{ display: children ? "none" : "block" }}
        onChange={handleFileChange}
        ref={inputRef}
      />

      {children && (
        <S.InputUploadChildren onClick={handleImageClick}>{children}</S.InputUploadChildren>
      )}

      {isPreview && !onPreview && preview && (
        <S.InputUploadPreview $position={position}>
          <Image
            src={preview}
            alt="preview"
            width={imageSize.width}
            height={imageSize.height}
            onClick={handleImageClick}
          />
        </S.InputUploadPreview>
      )}
    </S.InputUploadLayout>
  );
};

export default InputUpload;
