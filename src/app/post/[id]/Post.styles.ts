import styled from "styled-components";

export const PostContainer = styled.section`
  position: relative;
  height: 100%;
  min-height: 100vh;
`;

export const PostContentLayout = styled.section`
  height: 45%;
  padding: 0 1.5rem;
`;

export const PostContentSection = styled.section`
  height: calc(100% - 18rem);
  padding: 1rem 0;
  overflow-y: auto;
`;
