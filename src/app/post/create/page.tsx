"use client";

import React from "react";
import { PostCreateContextProvider } from "./context/PostCreateContext";
import PostCreateView from "./PostCreate.view";
import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "@/lib/api/Post/client";
import { POST_KEY } from "@/lib/api/queryKeys";
import { useRouter, useSearchParams } from "next/navigation";
import { PostCreateRequest } from "@/types/Request";
import { getMasilDetail } from "@/lib/api/masil/client";
import { useUI } from "@/components/uiContext/UiContext";

const PostCreate = () => {
  const searchParams = useSearchParams();
  const postId = searchParams.get("postId");
  const logId = searchParams.get("logId");
  const router = useRouter();
  const { setModalView, openModal } = useUI();

  const { data, isLoading } = useQuery({
    queryKey: [POST_KEY.GET_CREATE_POST],
    queryFn: () => getDefaultData({ postId: postId, logId: logId }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  if (!isLoading && !data) {
    router.push("/home");
    setModalView("ANIMATION_ALERT_VIEW");
    openModal({
      message: "문제가 발생하였습니다.<br>잠시 후 다시 시도해주세요.",
    });
    return;
  }

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
      isPublic: fetchData.isPublic,
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

  return false;
};
