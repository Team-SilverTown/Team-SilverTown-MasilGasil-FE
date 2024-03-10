import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  padding-top: 4rem;
  text-align: center;

  color: ${(props) => props.theme.gray_300};
`;

export const MonthlyMasils = { backgroundColor: "#B9DB56", color: "white", borderRadius: "50%" };

export const CalenderWrapper = styled.div`
  width: 100%;
  height: 28rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0rem 3rem;
  gap: 0.3rem;
  display: flex;
  justify-content: end;
`;

export const SubText = styled.span`
  color: ${(props) => props.theme.gray_300};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
