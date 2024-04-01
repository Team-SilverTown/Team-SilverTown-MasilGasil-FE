"use client";

import { redirect, usePathname } from "next/navigation";

const NotFound = () => {
  const currentPathName = usePathname();

  if (currentPathName !== "/not-found") redirect("/not-found");

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <span className="font-semibold text-h2 rotate-[20deg]">앗!</span>
      <span className="font-semibold text-h3">페이지를 찾을 수 없어요.</span>
    </div>
  );
};

export default NotFound;
