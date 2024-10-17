// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent";

export const PostCardSkeleton = () => {
  return (
    <div className={`${shimmer} relative h-[23rem] w-[100%] shrink-0 rounded-lg bg-gray-200`} />
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
    <div className={`${shimmer} relative h-[12rem] w-[30rem] shrink-0 rounded-lg bg-gray-200`} />
  );
};

export const LogSimpleCardSkeleton = () => (
  <div className={`${shimmer} relative h-[16.5rem] w-[16.5rem] shrink-0 rounded-lg bg-gray-200`} />
);

export const LogPreviewSkeleton = () => (
  <>
    <div className={`${shimmer} relative mt-14 h-[20px] w-[30%] rounded-lg bg-gray-200`} />
    <div className="mt-5 flex w-full space-x-9 overflow-x-hidden">
      <LogSimpleCardSkeleton />
      <LogSimpleCardSkeleton />
      <LogSimpleCardSkeleton />
    </div>
  </>
);

export const ListPreviewSkeleton = () => {
  return (
    <>
      <div className={`${shimmer} relative mt-12 h-[20px] w-[30%] rounded-lg bg-gray-200`} />
      <div className="mt-5 flex w-full space-x-9 overflow-x-hidden">
        <LogDetailCardSkeleton />
        <LogDetailCardSkeleton />
      </div>
    </>
  );
};

export const HomeSkeleton = () => {
  return (
    <div className="h-full w-full overflow-hidden px-8 pb-56 pt-[10rem]">
      <div className={`${shimmer} relative mt-10 h-[150px] w-full rounded-lg bg-gray-200 px-6`} />
      <ListPreviewSkeleton />
      <ListPreviewSkeleton />
      <ListPreviewSkeleton />
    </div>
  );
};

export const HomeWeatherSkeleton = () => {
  return (
    <div className="flex h-full w-full justify-between">
      <div className={`${shimmer} relative h-[1.725rem] w-[13rem] rounded-lg bg-gray-200`}></div>
      <div className={`${shimmer} relative h-[1.725rem] w-[18rem] rounded-lg bg-gray-200`}></div>
    </div>
  );
};

export const HomeWalkListSkeleton = () => {
  return (
    <div className="mt-8 overflow-hidden px-6">
      <div className="mb-4 flex h-[1.839rem] items-center justify-between">
        <div className={`${shimmer} h-full w-[18rem] rounded-lg bg-gray-200`}></div>
        <div className={`${shimmer} h-full w-[3.7rem] rounded-lg bg-gray-200`}></div>
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
    <div className="flex h-full w-full flex-col justify-end">
      <div className={`h-[42%] w-full rounded-xl bg-[#F8F8F8] shadow-sheet`} />
    </div>
  );
};

export const DiarySkeleton = () => {
  return (
    <div className="h-full w-full overflow-hidden px-6 pb-56 pt-[7rem]">
      <div className={`${shimmer} relative h-[5rem] w-full rounded-lg bg-gray-200`} />
      <div className={`${shimmer} relative mt-10 h-[25rem] w-full rounded-lg bg-gray-200`} />
      <div className={`${shimmer} relative mt-10 h-[18rem] w-full rounded-lg bg-gray-200`} />
    </div>
  );
};

export const ProfileSkeleton = () => {
  return (
    <div className="h-full w-full overflow-hidden px-8 pb-56 pt-[9rem]">
      <div className="flex w-full flex-col items-center justify-center">
        <div className={`${shimmer} relative h-[120px] w-[120px] rounded-full bg-gray-200`} />
        <div
          className={`${shimmer} relative mt-[1.5rem] h-[2.5rem] w-[7rem] rounded-lg bg-gray-200`}
        />
      </div>
      <div className={`${shimmer} relative mt-[8.5rem] h-[12rem] w-full rounded-lg bg-gray-200`} />
      <div className="w-full pt-10">
        <LogPreviewSkeleton />
        <ListPreviewSkeleton />
        <ListPreviewSkeleton />
      </div>
    </div>
  );
};
