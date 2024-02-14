import styled from "styled-components";

export const LogRecordLayout = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  border: 1px solid red;
`;

/* TEST Component */
export const LogTestActionList = styled.div`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  position: absolute;
  top: 1rem;

  border: solid 1px blue;
`;

export const LogTestButton = styled.button`
  width: 7rem;
  height: 3rem;

  background-color: ${({ theme }) => theme.green_300};
`;
