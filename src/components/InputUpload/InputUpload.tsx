"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IMAGE_TYPES } from "./InputUpload.constants";
import * as S from "./InputUpload.styles";

interface InputUploadProps {
  position?: "relative" | "absolute";
  children?: React.ReactNode;
  updateFile: (file: File | null) => void;
  isPreview?: boolean;
  onPreview?: (preview: string | File, imageSize: { width: number; height: number }) => void;
  previewValue?: string | null;
}

const InputUpload = ({
  position = "absolute",
  children,
  updateFile,
  isPreview = true,
  onPreview,
  previewValue,
}: InputUploadProps) => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(previewValue ?? null);

  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setPreview(previewValue ?? null);
  }, [previewValue]);

  useEffect(() => {
    if (!previewValue) {
      return;
    }

    const image = document.createElement("img");
    image.src = previewValue;

    image.onload = () => {
      setImageSize({
        width: image.width,
        height: image.height,
      });
    };
  }, [previewValue]);

  /**
   * @function handleFileChange
   *
   * @summary input에 Image가 변경될시 type검사를 진행합니다.
   * 검사 후, updateFile에 변경된 File을 전달하고
   * preview 이미지를 업로드 합니다.
   *
   * 내부에서 preview의 size를 확인하여 imageSize의 값을 변경
   */
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
          updateFile(null);
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
    updateFile(file);
  };

  /**
   * @function handleImageClick
   *
   * @summary input요소 외 다른 요소를 클릭하여 input을 띄울 수 있는 함수
   */
  const handleImageClick = () => {
    inputRef.current?.click();
  };

  return (
    <S.InputUploadLayout>
      <S.InputUpload
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
