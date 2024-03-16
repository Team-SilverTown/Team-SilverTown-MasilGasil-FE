"use client";

import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import debounce from "lodash.debounce";

import { TopNavigator } from "@/components/navigators/TopNavigator";

import ExploreView from "./Explore.view";
import { BottomSheetSection, MapSection } from "./sections";
import { SearchBar } from "./components";
import ListSection from "./sections/ListSection/ListSection";
import { LocationMap } from "@/types/OriginDataType";
import { PostListRequest } from "@/types/Request";
import { getPostList } from "@/lib/api/Post/client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { POST_KEY } from "@/lib/api/queryKeys";
import { PostListItem } from "@/types/OriginDataType/Post";

const TAKE = 5;

export interface SearchProps {
  keyword: string;
}

const ExploreController = () => {
  const [locationData, setLocationData] = useState<LocationMap | null>(null);
  const [orderMode, setOrderMode] = useState<"LATEST" | "MOST_POPULAR">("LATEST");

  const fetchHandler = async (d: any) => {
    const params: PostListRequest = {
      depth1: locationData?.depth1!,
      depth2: locationData?.depth2!,
      depth3: locationData?.depth3!,
      cursor: d.pageParam ?? null,
      order: orderMode,
      size: TAKE,
    };

    const data = await getPostList(params);

    return data;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [
      POST_KEY.POST_LIST,
      locationData?.depth1,
      locationData?.depth2,
      locationData?.depth3,
      orderMode,
    ],
    queryFn: fetchHandler,
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
    enabled: !!locationData,
  });

  const postsOriginData = useMemo(
    () => (data && data.pages.flatMap((page) => page.contents)) ?? [],
    [data],
  );

  const [postsData, setPostsData] = useState<PostListItem[]>([]);

  const { register, handleSubmit, watch, setValue, setFocus } = useForm<SearchProps>({
    mode: "onChange",
  });

  const debouncedOnChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value.trim();

    if (keyword === "") {
      setPostsData([]);
      return;
    }
    setPostsData(postsOriginData.filter((item) => item.title.includes(keyword)));
  }, 300);

  const searchClearHandler = () => {
    setValue("keyword", "");
    setFocus("keyword");
    setPostsData([]);
  };

  const listViews = [
    <ListSection
      id="post"
      data={postsData.length < 1 ? postsOriginData : postsData}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />,
    <ListSection
      id="mate"
      data={[]}
    />,
  ];

  return (
    <>
      <TopNavigator
        rightChildren={
          <SearchBar
            register={register}
            watch={watch}
            clearHandler={searchClearHandler}
            onChangeHandler={debouncedOnChange}
          />
        }
        rightSectionStyle={{ width: "calc(100%)" }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ExploreView>
        <MapSection setLocationData={setLocationData} />
        <BottomSheetSection
          locationData={locationData}
          listViews={listViews}
          setOrderMode={setOrderMode}
        />
      </ExploreView>
    </>
  );
};

export default ExploreController;
