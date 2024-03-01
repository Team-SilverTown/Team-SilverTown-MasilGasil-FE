import React from "react";
import MateDetail from "./MateDetail";

interface MateProps {
  params: { id: string };
}

const Mate = ({ params }: MateProps) => {
  const { id } = params;

  return <MateDetail />;
};

export default Mate;
