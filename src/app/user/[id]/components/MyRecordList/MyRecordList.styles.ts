import styled from "styled-components";

export const BorderContainer = styled.div`
  margin-top: 3rem;
`;
export const BorderTitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 1.8rem;
    font-weight: 900;
    color: ${(props) => props.theme.black};
  }

  a {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.gray_500};
  }
`;
export const BorderContentSection = styled.div`
  margin-top: 1.2rem;
`;

export const BorderContentListWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  & > div:not(:last-child) {
    margin-right: 1.5rem;
  }
  & > div {
    flex-shrink: 0;
  }
`;
