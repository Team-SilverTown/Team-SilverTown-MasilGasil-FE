"use client";

import { LogDetailCard } from "@/components";
import MoveArrow from "@/components/icons/MoveArrow";
import { convertMeter, convertSeconds } from "@/lib/utils";
import { PostMoreListResponse } from "@/types/Response/Post";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface IconProps {
  size?: string | number;
  fill?: string;
}

interface PostContainerProps {
  label: string;
  icon?: React.ReactElement<IconProps>;
  url: string;
  data: PostMoreListResponse;
}

const PostContainer = ({ label, icon, url, data }: PostContainerProps) => {
  const router = useRouter();
  const { isEmpty, contents } = data;

  return (
    <section className="inset-1 flex w-full flex-col justify-between gap-[0.5rem] rounded-[3rem] bg-white p-6 pb-6 pt-3 shadow-[inset_0px_0px_0px_4px_#fafafa] drop-shadow">
      <div
        className="flex w-full cursor-pointer items-center justify-between "
        onClick={() => router.push(`${url}`)}
      >
        <div className="flex items-center justify-start">
          {icon}
          <p className="text-[2rem] font-semibold text-gray-700">{label}</p>
        </div>

        <MoveArrow />
      </div>
      <div>
        {isEmpty ? (
          <div className="flex h-[12rem] w-full items-center justify-center rounded-[2rem] bg-gray-100">
            <p className="text-2xl font-semibold text-gray-400">데이터가 존재하지 않습니다</p>
          </div>
        ) : (
          <ul className="flex gap-8 overflow-x-auto overflow-y-hidden scrollbar-hide">
            {contents.map((post) => (
              <li key={post.id}>
                <Link href={`/post/${post.id}`}>
                  <LogDetailCard
                    title={post.title}
                    content={post.content}
                    thumbnailUrl={post.thumbnailUrl}
                    distance={convertMeter(post.distance)}
                    totalTime={convertSeconds(post.totalTime)}
                    isLikeLayout={true}
                    address={post.address}
                    likeCount={post.likeCount}
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default PostContainer;
