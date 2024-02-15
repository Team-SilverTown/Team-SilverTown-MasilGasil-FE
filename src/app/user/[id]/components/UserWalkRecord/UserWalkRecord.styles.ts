"use client";

import styled from "styled-components";

export const UserWalkRecordContainer = styled.div`
  padding: 2rem;
  border-radius: 0.8rem;
  margin-top: 2.8rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 11px;
  h3 {
    font-size: 1.6rem;
    font-weight: 700;
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
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .walkItemInfo {
      display: flex;
      justify-content: center;
      align-items: end;
      span {
        font-size: 1.4rem;
        padding-right: 0.1rem;
      }
      small {
        font-size: 1.1rem;
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
