import styled from "styled-components";

export const PostPinEditPinList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.gray_300};
`;
