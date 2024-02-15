import styled from "styled-components";

export const LogRecordActionLayout = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: end;

  opacity: 0.9;
  user-select: none;
`;

export const LogRecordActionContainer = styled.div`
  width: 32rem;
  padding: 1.6rem;
  margin-bottom: 1.6rem;

  /* 추후 전역 스타일 적용 */
  background-color: ${({ theme }) => "#fff"};
  border-radius: 0.8rem;
  box-shadow: 0 2px 7.8px 0 ${(props) => props.theme.transparent_50};
`;

export const LogRecordInfoContainer = styled.div`
  width: 30rem;
  margin-bottom: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogRecordInfo = styled.p`
  width: 14rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  /* 추후 전역 스타일 적용 */
  background-color: #f1f5eb;
  border-radius: 0.8rem;
  box-shadow: 0 2px 7.8px 0 ${(props) => props.theme.transparent_50};

  /* 추후 전역 스타일 적용 */
  font-size: 1.6rem;
  font-weight: 700;
`;
