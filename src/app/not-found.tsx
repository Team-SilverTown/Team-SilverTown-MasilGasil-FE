"use client";

import { usePathname, redirect } from "next/navigation";

const NotFound = () => {
  const currentPathName = usePathname();

  if (currentPathName !== "/not-found") redirect("/not-found");

  return <div>NotFound</div>;
};

export default NotFound;
