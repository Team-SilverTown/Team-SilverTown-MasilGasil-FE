import styled from "styled-components";

interface InputUploadPreviewProps {
  $position: "relative" | "absolute";
}

export const InputUploadLayout = styled.div`
  position: relative;
`;

export const InputUpload = styled.input``;

export const InputUploadChildren = styled.div`
  cursor: pointer;
`;

export const InputUploadPreview = styled.div<InputUploadPreviewProps>`
  position: ${(props) => props.$position};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;

  img {
    object-fit: cover;
    object-position: center;
    height: 100%;
  }
`;
