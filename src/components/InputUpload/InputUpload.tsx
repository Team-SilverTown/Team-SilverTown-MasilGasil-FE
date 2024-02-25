"use client";

import { IFormInput } from "@/app/mate/create/page";
import React, { useRef, useState } from "react";
import { UseFormReturn, UseFormRegisterReturn } from "react-hook-form";
import * as S from "./InputUpload.styles";
import Image from "next/image";

interface InputUploadProps {
  register: UseFormRegisterReturn;
  setValue: UseFormReturn<IFormInput>["setValue"];
  name: keyof IFormInput;
  children?: React.ReactNode;
}

const InputUpload = ({ register, setValue, name, children }: InputUploadProps) => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState({
    width: 0,
    height: 0,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      console.log("reader", reader);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          const image = document.createElement("img");
          image.onload = () => {
            setImageSize({
              width: image.width,
              height: image.height,
            });
          };
          image.src = reader.result;
          setPreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
    if (event.target.files) {
      setValue(name, event.target.files);
    }
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

      <S.InputUploadPreview>
        {preview && (
          <Image
            src={preview}
            alt="preview"
            width={imageSize.width}
            height={imageSize.height}
            onClick={handleImageClick}
          />
        )}
      </S.InputUploadPreview>
    </S.InputUploadLayout>
  );
};

export default InputUpload;
