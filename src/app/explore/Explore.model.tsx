"use client";

import { useMemo, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { getPostList } from "@/lib/api/Post/client";
import { PostListRequest } from "@/types/Request";
import { POST_KEY } from "@/lib/api/queryKeys";
import { LocationMap } from "@/types/OriginDataType";

// const useExploreModel = () => {

//   return {
//     postsData,
//     fetchNextPage,
//     hasNextPage,
//     isFetchingNextPage,
//   };
// };

// export default useExploreModel;
