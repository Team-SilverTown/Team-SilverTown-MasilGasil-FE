"use client";

import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import styled from "styled-components";

export const UserWalkRecordContainer = styled.div`
  padding: 2rem;
  border-radius: 0.8rem;
  margin-top: 2.8rem;
  background-color: ${(props) => props.theme.white};
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 11px;
  h3 {
    font-size: ${FONT_SIZE.LARGE};
    font-weight: ${FONT_WEIGHT.BOLD};
    color: ${(props) => props.theme.black};
    margin-bottom: 2.7rem;
  }
`;

export const UserWalkRecordList = styled.ul`
  display: flex;
  justify-content: space-around;
  li {
    flex: 1;
    text-align: center;
    strong {
      display: block;
      font-size: ${FONT_SIZE.BASIC};
      font-weight: ${FONT_WEIGHT.SEMIBOLD};
      margin-bottom: 0.5rem;
    }

    .walkItemInfo {
      display: flex;
      justify-content: center;
      align-items: end;
      span {
        font-size: ${FONT_SIZE.BASIC};
        padding-right: 0.1rem;
      }
      small {
        font-size: ${FONT_SIZE.MINI};
      }
    }
  }
  li:not(:first-child) {
    position: relative;
    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      content: "";
      display: inline-block;
      width: 0.1rem;
      height: 5rem;
      background-color: ${(props) => props.theme.gray_100};
    }
  }
`;
