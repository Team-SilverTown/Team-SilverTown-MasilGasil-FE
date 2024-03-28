import React from "react";
import MateDetail from "./MateDetail";
import { getMateDetail } from "@/lib/api/Mate/server";

interface MateProps {
  params: { id: string };
}

const Mate = async ({ params }: MateProps) => {
  const { id } = params;

  const data = await getMateDetail(id);

  if (!data) {
    return;
  }

  return <MateDetail mateData={data} />;
};

export default Mate;
