import React from "react";

import MateCreateController from "./MateCreate.controller";

interface MateCreateProps {
  searchParams: { lat: string; lng: string; postId: string };
}

const MateCreate = ({ searchParams }: MateCreateProps) => {
  const { lat, lng, postId } = searchParams;

  if (!lat || !lng || !postId) {
    throw Error("정상적이지못한 접근");
  }

  return (
    <MateCreateController
      lat={Number(lat)}
      lng={Number(lng)}
      postId={postId}
    />
  );
};

export default MateCreate;
