"use client";

import { useSearchParams } from "next/navigation";
import LogRecordView from "./LogRecord.view";
import { LogRecordContextProvider } from "./context/LogRecordContext";
import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "@/lib/api/Post/client";
import { POST_KEY } from "@/lib/api/queryKeys";
import { NavigationData } from "./LogRecord.types";

const LogRecord = () => {
  const searchParams = useSearchParams();
  const postId = searchParams.get("postId");

  const { data } = useQuery({
    queryKey: [POST_KEY.GET_POST],
    queryFn: () => getPostDetail({ id: postId ?? "null" }),
    enabled: !!postId,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,

    select: (data) => {
      const { path, pins } = data;

      const newNavigationData: NavigationData = {
        path,
        pins,
      };

      return newNavigationData;
    },
  });

  return (
    <LogRecordContextProvider navigationData={data}>
      <LogRecordView />
    </LogRecordContextProvider>
  );
};

export default LogRecord;
