const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent";

export const PostCardSkeleton = () => {
  return (
    <div className={`${shimmer} relative w-[100%] h-[23rem] rounded-lg bg-gray-200 shrink-0`} />
  );
};

export const PostCardsSkeleton = () => {
  return (
    <>
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
    </>
  );
};

export const LogDetailCardSkeleton = () => {
  return (
    <div className={`${shimmer} relative w-[30rem] h-[12rem] rounded-lg bg-gray-200 shrink-0`} />
  );
};

export const LogSimpleCardSkeleton = () => (
  <div className={`${shimmer} relative w-[16.5rem] h-[16.5rem] rounded-lg bg-gray-200 shrink-0`} />
);

export const LogPreviewSkeleton = () => (
  <>
    <div className={`${shimmer} relative w-[30%] h-[20px] rounded-lg mt-14 bg-gray-200`} />
    <div className="flex w-full space-x-9 mt-5 overflow-x-hidden">
      <LogSimpleCardSkeleton />
      <LogSimpleCardSkeleton />
      <LogSimpleCardSkeleton />
    </div>
  </>
);

export const ListPreviewSkeleton = () => {
  return (
    <>
      <div className={`${shimmer} relative w-[30%] h-[20px] rounded-lg mt-12 bg-gray-200`} />
      <div className="flex w-full space-x-9 mt-5 overflow-x-hidden">
        <LogDetailCardSkeleton />
        <LogDetailCardSkeleton />
      </div>
    </>
  );
};

export const HomeSkeleton = () => {
  return (
    <div className="w-full h-full pt-[10rem] pb-56 px-8 overflow-hidden">
      <div className={`${shimmer} relative w-full h-[150px] rounded-lg mt-10 px-6 bg-gray-200`} />
      <ListPreviewSkeleton />
      <ListPreviewSkeleton />
      <ListPreviewSkeleton />
    </div>
  );
};

export const HomeWeatherSkeleton = () => {
  return (
    <div className="w-full h-full flex justify-between mb-4">
      <div className={`${shimmer} relative w-[13rem] h-[2.1rem] rounded-lg bg-gray-200`}></div>
      <div className={`${shimmer} relative w-[18rem] h-[2.1rem] rounded-lg bg-gray-200`}></div>
    </div>
  );
};

export const HomeWalkListSkeleton = () => {
  return (
    <div className="mt-8 px-6 overflow-hidden">
      <div className="flex justify-between items-center mb-4 h-[1.839rem]">
        <div className={`${shimmer} w-[18rem] h-full rounded-lg bg-gray-200`}></div>
        <div className={`${shimmer} w-[3.7rem] h-full rounded-lg bg-gray-200`}></div>
      </div>
      <div className="flex gap-8 overflow-x-auto scrollbar-hide">
        <LogDetailCardSkeleton />
        <LogDetailCardSkeleton />
        <LogDetailCardSkeleton />
      </div>
    </div>
  );
};

export const ExploreSkeleton = () => {
  return (
    <div className="flex flex-col justify-end w-full h-full">
      <div className={`w-full h-[42%] rounded-xl shadow-sheet bg-[#F8F8F8]`} />
    </div>
  );
};

export const DiarySkeleton = () => {
  return (
    <div className="w-full h-full pt-[7rem] pb-56 px-6 overflow-hidden">
      <div className={`${shimmer} relative w-full h-[5rem] rounded-lg bg-gray-200`} />
      <div className={`${shimmer} relative w-full h-[25rem] mt-10 rounded-lg bg-gray-200`} />
      <div className={`${shimmer} relative w-full h-[18rem] mt-10 rounded-lg bg-gray-200`} />
    </div>
  );
};

export const ProfileSkeleton = () => {
  return (
    <div className="w-full h-full pt-[9rem] pb-56 px-8 overflow-hidden">
      <div className="flex flex-col w-full justify-center items-center">
        <div className={`${shimmer} relative w-[120px] h-[120px] rounded-full bg-gray-200`} />
        <div
          className={`${shimmer} relative w-[7rem] h-[2.5rem] mt-[1.5rem] rounded-lg bg-gray-200`}
        />
      </div>
      <div className={`${shimmer} relative w-full h-[12rem] mt-[8.5rem] rounded-lg bg-gray-200`} />
      <div className="w-full pt-10">
        <LogPreviewSkeleton />
        <ListPreviewSkeleton />
        <ListPreviewSkeleton />
      </div>
    </div>
  );
};
