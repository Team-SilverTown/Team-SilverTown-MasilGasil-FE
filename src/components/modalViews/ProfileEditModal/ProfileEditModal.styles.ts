import styled from "styled-components";

interface ProfileImageProps {
  $src: string;
}

export const ProfileEditLayout = styled.div`
  width: 28rem;
  height: 80%;
  margin: 3rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  overflow-y: auto;
  user-select: none;
`;

export const ProfileEditThumbnail = styled.div`
  width: 100%;
  height: 25rem;
  background-color: ${(props) => props.theme.gray_100};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  color: ${(props) => props.theme.gray_300};
  position: relative;
`;

export const ProfileImage = styled.img<ProfileImageProps>``;
