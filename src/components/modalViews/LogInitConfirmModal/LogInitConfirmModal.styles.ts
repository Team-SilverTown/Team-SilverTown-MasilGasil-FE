import styled from "styled-components";

export const LogInitConfirmLayout = styled.div`
  width: 28rem;
  padding: 0 2rem;

  user-select: none;
`;

export const LogInitConfirmMessage = styled.p`
  width: 100%;
  padding: 1rem 0;

  font-size: 1.6rem;
  font-weight: 600;
`;

export const LogInitConfirmWarning = styled.p`
  width: 100%;

  font-size: 1.2rem;
  font-weight: 600;
  color: red;
`;

export const ConfirmActionsContainer = styled.div`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;
`;
