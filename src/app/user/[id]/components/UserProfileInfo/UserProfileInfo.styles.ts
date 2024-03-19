import { FONT_SIZE } from "@/styles/theme";
import styled from "styled-components";

interface UserInfoProfileImageProps {
  width: number;
  height: number;
}

export const UserInfoProfile = styled.div`
  padding: 1rem 0;
  text-align: center;
`;

export const UploadContainer = styled.div`
  overflow: hidden;
  position: absolute;
  border-radius: 50%;
`;

export const UserInfoProfileImage = styled.div<UserInfoProfileImageProps>`
  position: relative;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  border-radius: 50%;
`;

export const CameraIconLayout = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  content: "";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.white};
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 11px;
`;

export const UserInfoProfileText = styled.div`
  strong {
    display: inline-block;
    margin: 1.6rem 0 0;
    font-size: ${FONT_SIZE.H4};
    color: ${(props) => props.theme.black};
  }
`;
