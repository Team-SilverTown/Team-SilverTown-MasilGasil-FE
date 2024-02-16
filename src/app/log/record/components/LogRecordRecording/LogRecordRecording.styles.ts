import styled from "styled-components";

export const LogRecordActionLayout = styled.div`
  width: 100%;
  max-width: 36rem;
  min-width: 24rem;
  padding-bottom: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: end;

  position: absolute;
  bottom: 0;

  opacity: 0.9;
  user-select: none;
`;

export const LogRecordActionContainer = styled.div`
  width: 100%;
  padding: 1.6rem;

  /* 추후 전역 스타일 적용 */
  background-color: ${({ theme }) => "#fff"};
  border-radius: 0.8rem;
  box-shadow: 0 2px 7.8px 0 ${(props) => props.theme.transparent_50};
`;

export const LogRecordInfoContainer = styled.div`
  width: 100%;
  margin-bottom: 1.6rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const LogRecordInfo = styled.p`
  width: calc(50% - 0.8rem);
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
