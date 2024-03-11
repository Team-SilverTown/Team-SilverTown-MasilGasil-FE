"use client";

import React from "react";
import { PostCreateContextProvider } from "./context/PostCreateContext";
import PostCreateView from "./PostCreate.view";
import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "@/lib/api/Post/client";
import { POST_KEY } from "@/lib/api/queryKeys";
import { useSearchParams } from "next/navigation";
import { POST_CREATE_DEFAULT_REQUEST_VALUE } from "./PostCreate.constants";
import { PostCreateRequest } from "@/types/Request";
import { getMasilDetail } from "@/lib/api/masil/client";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

const PostCreate = () => {
  const searchParams = useSearchParams();
  const postId = searchParams.get("postId");
  const logId = searchParams.get("logId");

  const { data, isLoading } = useQuery({
    queryKey: [POST_KEY.POST_CREATE],
    queryFn: () => getDefaultData({ postId: postId, logId: logId }),
  });

  if (isLoading || !data) {
    return;
  }

  return (
    <PostCreateContextProvider defaultData={data}>
      <PostCreateView />
    </PostCreateContextProvider>
  );
};

export default PostCreate;

const getDefaultData = async ({
  postId,
  logId,
}: {
  postId: string | null;
  logId: string | null;
}) => {
  if (postId) {
    const fetchData = await getPostDetail({ id: postId });

    const defaultData: PostCreateRequest = {
      depth1: fetchData.depth1,
      depth2: fetchData.depth2,
      depth3: fetchData.depth3,
      depth4: fetchData.depth4,
      path: fetchData.path,
      title: fetchData.title,
      content: fetchData.content,
      distance: fetchData.distance,
      totalTime: fetchData.totalTime,
      isPublic: true,
      pins: fetchData.pins,
      thumbnailUrl: fetchData.thumbnailUrl,
    };

    return defaultData;
  }

  if (logId) {
    const fetchData = await getMasilDetail({ id: logId });

    const defaultData: PostCreateRequest = {
      depth1: fetchData.depth1,
      depth2: fetchData.depth2,
      depth3: fetchData.depth3,
      depth4: fetchData.depth4,
      path: fetchData.path,
      title: "",
      content: fetchData.content,
      distance: fetchData.distance,
      totalTime: fetchData.totalTime,
      isPublic: true,
      pins: fetchData.pins,
      thumbnailUrl: fetchData.thumbnailUrl,
    };

    return defaultData;
  }

  return POST_CREATE_DEFAULT_REQUEST_VALUE;
};
