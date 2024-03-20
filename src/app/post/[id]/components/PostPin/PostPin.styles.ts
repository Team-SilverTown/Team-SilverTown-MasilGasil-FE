import styled from "styled-components";

export const PostPinContainer = styled.div`
  @media (max-width: 380px) {
    .pinDetailCard {
      max-height: 13rem;
    }
  }
`;

export const PostPinEmptyMessage = styled.div`
  padding: 3rem 0;
  text-align: center;
  color: ${(props) => props.theme.gray_300};
`;
