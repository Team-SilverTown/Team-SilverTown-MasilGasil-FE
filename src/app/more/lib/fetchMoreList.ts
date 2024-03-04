interface fetchMoreListProps {
  pageParam?: number;
  queryKey: string[];
  sort?: string;
}

/**
 *
 * @param pageParam initialPageParam 데이터를 전달 받습니다.
 * @param queryKey queryKey를 담은 배열을 전달 받습니다.
 * @returns fetch를 통해 호출한 데이터의 json()을 리턴합니다.
 */

const fetchMoreList = async ({ pageParam, queryKey }: fetchMoreListProps) => {
  const [_1, keyword, order] = queryKey;
  console.log(pageParam);
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${pageParam}`, {
    next: {
      tags: ["moreList", keyword, order],
    },
  });

  if (!res.ok) {
    throw new Error("MoreList 호출 에러!!");
  }
  return res.json();
};

export default fetchMoreList;
