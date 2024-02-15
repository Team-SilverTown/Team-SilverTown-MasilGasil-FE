import styled from "styled-components";

interface UserInfoProfileImageProps {
  width: number;
  height: number;
}

export const UserInfoProfile = styled.div`
  text-align: center;
`;

export const UserInfoProfileImage = styled.div<UserInfoProfileImageProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
`;

export const UserInfoProfileText = styled.div`
  strong {
    display: inline-block;
    margin: 1.6rem 0 0.6rem;
    font-size: 1.8rem;
    color: ${(props) => props.theme.black};
  }

  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.gray_300};
  }
`;
