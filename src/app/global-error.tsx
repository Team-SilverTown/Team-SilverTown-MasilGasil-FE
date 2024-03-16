"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error);

  return (
    <section className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">앗 문제가 생겼어요!</h2>
      <button
        className="mt-4 rounded-md bg-green-500 px-4 py-2 text-small text-white transition-colors"
        onClick={() => reset()}
      >
        다시 시도하기
      </button>
    </section>
  );
}
