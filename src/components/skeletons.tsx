// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent";

export const PostCardSkeleton = () => {
  return <div></div>;
};

export const PostCardsSkeleton = () => {
  return (
    <>
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
    </>
  );
};

export const LogDetailCardSkeleton = () => {
  return (
    <div className={`${shimmer} relative flex-1 w-[33rem] h-[13rem] rounded-lg bg-gray-200`} />
  );
};

export const LogSimpleCardSkeleton = () => {};

export const ListPreviewSkeleton = () => {
  return (
    <>
      <div className={`${shimmer} relative w-full h-[20px] rounded-lg mt-10 bg-gray-200`} />
      <div className="flex w-full space-x-9 mt-5 overflow-x-hidden">
        <LogDetailCardSkeleton />
        <LogDetailCardSkeleton />
      </div>
    </>
  );
};

export const HomeSkeleton = () => {
  return (
    <div className="w-full h-full pt-32 pb-56 px-6">
      <div className={`${shimmer} relative w-full h-[145px] rounded-lg mt-10 bg-gray-200`} />
      <ListPreviewSkeleton />
      <ListPreviewSkeleton />
      <ListPreviewSkeleton />
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
    <div className="w-full h-full pt-[7rem] pb-56 px-6">
      <div className={`${shimmer} relative w-full h-[5rem] rounded-lg bg-gray-200`} />
      <div className={`${shimmer} relative w-full h-[25rem] mt-10 rounded-lg bg-gray-200`} />
      <div className={`${shimmer} relative w-full h-[18rem] mt-10 rounded-lg bg-gray-200`} />
    </div>
  );
};

export const ProfileSkeleton = () => {
  return (
    <div className="w-full h-full pt-[7rem] pb-56 px-6">
      <div className="flex flex-col w-full justify-center items-center">
        <div className={`${shimmer} relative w-[120px] h-[120px] rounded-full bg-gray-200`} />
        <div
          className={`${shimmer} relative w-[7rem] h-[2.5rem] mt-[1.5rem] rounded-lg bg-gray-200`}
        />
      </div>
      <div
        className={`${shimmer} relative w-full h-[12rem] mt-20 rounded-lg bg-gray-200`}
      />
      <ListPreviewSkeleton />
      <ListPreviewSkeleton />
      <ListPreviewSkeleton />
    </div>
  );
};
