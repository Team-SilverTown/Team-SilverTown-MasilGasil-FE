import styled from "styled-components";

export const MoreListLayout = styled.div`
  padding-top: 6rem;
`;

export const MoreListFilter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 1.5rem;
  margin-bottom: 2rem;

  span {
    padding: 0.5rem 0;
    color: #999;

    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  span:first-child {
    padding-right: 1.5rem;
  }
`;

export const MoreListContainer = styled.div`
  padding: 0 1.5rem;
`;
