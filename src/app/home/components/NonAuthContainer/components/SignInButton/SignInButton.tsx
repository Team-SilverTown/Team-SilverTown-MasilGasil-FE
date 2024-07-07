"use client";

import Link from "next/link";

const SignInButton = () => {
  return (
    <Link href="/login">
      <section className="flex flex-shrink-0 flex-grow-0 cursor-pointer select-none justify-center gap-2 rounded-[3rem] bg-white bg-opacity-30 px-9 py-4 shadow-[inset_0px_0px_0px_2px_rgba(255,255,255,0.3)]">
        <span className="flex  gap-5 text-large font-bold text-white">마실가실 로그인하기</span>
      </section>
    </Link>
  );
};

export default SignInButton;
