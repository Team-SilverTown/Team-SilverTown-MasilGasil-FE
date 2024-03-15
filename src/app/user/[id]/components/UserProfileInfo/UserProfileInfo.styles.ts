import styled from "styled-components";

interface UserInfoProfileImageProps {
  width: number;
  height: number;
  $profile: string | null;
}

export const UserInfoProfile = styled.div`
  text-align: center;
`;

export const UserInfoProfileImage = styled.div<UserInfoProfileImageProps>`
  position: relative;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background-image: ${(props) => `url(${props.$profile})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer; // 추후 자신의 프로필에 접속 한 경우에만 "pointer"로 조건 처리
  margin: 0 auto;
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
    font-size: 1.8rem;
    color: ${(props) => props.theme.black};
  }
`;
