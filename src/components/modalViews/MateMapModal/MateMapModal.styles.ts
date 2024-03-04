import styled from "styled-components";

export const MapModalLayout = styled.section`
  min-width: 26rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const MapWrapper = styled.article`
  width: 100%;
  height: 26rem;

  border-radius: 1rem;
  border: 1px ${({ theme }) => theme.green_500} solid;
`;
