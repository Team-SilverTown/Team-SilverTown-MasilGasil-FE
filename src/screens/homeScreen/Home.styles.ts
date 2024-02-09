"use client";

import styled from "styled-components";
import tw from "twin.macro";

export const ObjectOne = styled.div`
  position: absolute;
  top: 20%;
  right: 10%;
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.theme.green_500};
  border-radius: 55% 45% 55% 45% / 60% 49% 51% 40%;
`;

export const ObjectTwo = styled.div`
  position: absolute;
  top: 10%;
  left: 20%;
  width: 400px;
  height: 400px;
  background-color: ${(props) => props.theme.green_300};
  border-radius: 38% 62% 38% 62% / 25% 51% 49% 75%;
`;

export const ObjectThree = styled.div`
  position: absolute;
  top: 55%;
  left: 20%;
  width: 350px;
  height: 350px;
  background-color: ${(props) => props.theme.yellow_500};
  border-radius: 62% 38% 55% 45% / 52% 53% 47% 48%;
`;

export const Hello = styled.div`
  color: ${(props) => props.theme.white_900};

  ${tw`text-3xl font-bold`};
`;
