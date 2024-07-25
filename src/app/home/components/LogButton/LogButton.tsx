"use client";

import MoveArrow from "@/components/icons/MoveArrow";

import { useRouter } from "next/navigation";

interface IconProps {
  size?: string | number;
  fill?: string;
}

interface LogButtonProps {
  label: React.ReactElement;
  icon?: React.ReactElement<IconProps>;
  url: string;
}

const LogButton = ({ label, icon, url }: LogButtonProps) => {
  const router = useRouter();
  
  return (
    <section
      className="inset-1 flex w-1/2 cursor-pointer flex-col justify-between gap-[2.5rem] rounded-[3rem] bg-white px-8 py-8 shadow-[inset_0px_0px_0px_4px_#fafafa] drop-shadow"
      onClick={() => router.push(`${url}`)}
    >
      <div className="flex w-full justify-between">
        {icon}
        <MoveArrow />
      </div>
      {label}
    </section>
  );
};

export default LogButton;
