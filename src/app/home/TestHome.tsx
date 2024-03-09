"use client";

import * as GS from "@/styles/GlobalStyle";

import { Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getMasilList } from "@/lib/api/masil/client";
import styled from "styled-components";
import Image from "next/image";

const TestHome = () => {
  const theme = useTheme();
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["testQueryKey"],
    queryFn: () => getMasilList({ size: 10 }),

    select: ({ masils }) => {
      const newList = masils.map((item) => {
        const newDate = new Date(item.startedAt);

        return {
          ...item,
          startedAt: `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`,
        };
      });

      return newList;
    },
  });

  return (
    <GS.CommonContainer
      style={{ height: "100%", padding: "2rem 0rem 6rem 0rem", position: "relative" }}
    >
      <TestLayout>
        <TestTitle>산책기록</TestTitle>

        <TestList>
          {data &&
            data.map(({ id, thumbnailUrl, startedAt }) => (
              <TestItem
                key={id}
                onClick={() => router.push(`/log/${id}`)}
              >
                {/* {thumbnailUrl && (
                  <Image
                    width={100}
                    height={100}
                    src={thumbnailUrl}
                    alt={`${id}_thumbnail`}
                  />
                )} */}
                <TestTime>{startedAt}</TestTime>
              </TestItem>
            ))}
        </TestList>
      </TestLayout>
      <Button
        buttonColor={theme?.green_500}
        variant="neumorp"
        textColor={theme?.white}
        style={{
          fontWeight: FONT_WEIGHT.BOLD,
          fontSize: FONT_SIZE.LARGE,
          position: "absolute",
          bottom: "8rem",
        }}
        width={"100%"}
        onClickHandler={() => router.push("/log/record")}
      >
        마실 기록 시작
      </Button>
    </GS.CommonContainer>
  );
};

export default TestHome;

const TestLayout = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
`;

const TestTitle = styled.h6`
  width: 100%;
  padding-top: 2rem;

  font-size: ${FONT_SIZE.H6};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

const TestList = styled.ul`
  width: 100%;
  flex-grow: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 15rem;
  justify-items: center;
  align-items: center;
`;

const TestItem = styled.li`
  width: 10rem;
  height: 10rem;

  position: relative;

  background-color: ${({ theme }) => theme.gray_200};
  border-radius: 8px;

  cursor: pointer;
`;

const TestTime = styled.p`
  position: absolute;
  bottom: 0.4rem;
  left: 0.4rem;

  font-size: ${FONT_SIZE.MICRO};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
`;
