import styled, { css } from "styled-components";
import { LogPageStep } from "./LogRecord.types";
import { motion } from "framer-motion";

interface LogRecordStyleProps {
  $pageStep: LogPageStep;
}

export const LogRecordLayout = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  position: relative;
  background-color: ${(props) => props.theme.background_color};
`;

export const LogRecordMapContainer = styled(motion.article)`
  width: 100%;
  height: 100%;
`;

const isEditStepLayout = css`
  height: 50%;
  position: relative;
  bottom: none;
`;

export const LogRecordStepLayout = styled(motion.div)<LogRecordStyleProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;

  ${({ $pageStep }) => $pageStep === "LOG_RECORD_EDITING" && isEditStepLayout}
`;

const isStandbyStep = css`
  padding-right: 1.6rem;
`;

const isEditStep = css`
  max-width: none;
  min-width: none;

  padding-right: 1.6rem;

  position: absolute;
  top: -7.2rem;
`;

export const LogRecordActions = styled.div<LogRecordStyleProps>`
  width: 100%;
  max-width: 36rem;
  min-width: 24rem;
  margin-bottom: 1.6rem;

  display: flex;
  justify-content: end;
  gap: 1.6rem;

  opacity: 0.9;

  ${({ $pageStep }) => $pageStep === "LOG_RECORD_STANDBY" && isStandbyStep}
  ${({ $pageStep }) => $pageStep === "LOG_RECORD_EDITING" && isEditStep}
`;
