import styled from "styled-components";

export const PostMateList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 7rem;
`;

export const PostMateEmptyMessage = styled.div`
  padding: 3rem 0;
  text-align: center;
  color: ${(props) => props.theme.gray_300};
`;
