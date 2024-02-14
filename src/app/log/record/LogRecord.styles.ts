import styled from "styled-components";

export const LogRecordLayout = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

/* TEST Component */
// 작업 진행 후 제거 예정

export const LogTestActionList = styled.div`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  position: absolute;
  top: 1rem;

  background-color: ${({ theme }) => theme.black_900};
  opacity: 0.5;

  z-index: 10;
`;

export const LogTestButton = styled.button`
  width: 7rem;
  height: 3rem;

  border-radius: 12px;

  background-color: ${({ theme }) => theme.green_300};
`;
