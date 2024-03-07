"use client";

import React from "react";
import { PostCreateContextProvider } from "./context/PostCreateContext";
import PostCreateView from "./PostCreate.view";

const PostCreate = () => {
  // TODO
  // 추후 이곳에서 LogData 에 대해 fetch를 받아온 후 전달하기

  // 현재 Init 부분을 tanstack 가공에서 처리가능다면 추후 반영하기

  const defaultData = {
    depth1: DUMMY.depth1,
    depth2: DUMMY.depth2,
    depth3: DUMMY.depth3,
    depth4: DUMMY.depth4,
    path: DUMMY.path,
    title: DUMMY.title,
    content: DUMMY.content,
    distance: DUMMY.distance,
    totalTime: DUMMY.totalTime,
    isPublic: true,
    pins: DUMMY.pins,
    thumbnailUrl: DUMMY.thumbnailUrl,
  };

  return (
    <PostCreateContextProvider defaultData={defaultData}>
      <PostCreateView />
    </PostCreateContextProvider>
  );
};

export default PostCreate;

const DUMMY = {
  id: 9999,
  depth1: "지역1",
  depth2: "지역2",
  depth3: "지역3",
  depth4: "지역4",

  title: "로그에서는 제목없어져야 합니다.",
  content:
    "이것은 로그에서 전해져온 내용으로 이 로그를 본 사용자는 즉시 PR을 5개 날릴 작업을 진행해야합니다.",
  path: [{ lat: 37.497, lng: 127.0254 }],

  distance: 0,
  totalTime: 0,
  startedAt: "2024-04-01",

  postId: null,
  thumbnailUrl: "",
  pins: [
    {
      id: 11,
      content: "핀 컨텐츠임",
      thumbnailUrl: "",
      point: { lat: 37.497, lng: 127.0254 },
    },
    {
      id: 11,
      content: "핀 컨텐츠임",
      thumbnailUrl: "",
      point: { lat: 37.497, lng: 127.0254 },
    },
    {
      id: 11,
      content: "핀 컨텐츠임",
      thumbnailUrl: "",
      point: { lat: 37.497, lng: 127.0254 },
    },
    {
      id: 11,
      content: "핀 컨텐츠임",
      thumbnailUrl: "",
      point: { lat: 37.497, lng: 127.0254 },
    },
    {
      id: 11,
      content: "핀 컨텐츠임",
      thumbnailUrl: "",
      point: { lat: 37.497, lng: 127.0254 },
    },
    {
      id: 11,
      content: "핀 컨텐츠임",
      thumbnailUrl: "",
      point: { lat: 37.497, lng: 127.0254 },
    },
    {
      id: 11,
      content: "핀 컨텐츠임",
      thumbnailUrl: "",
      point: { lat: 37.497, lng: 127.0254 },
    },
    {
      id: 11,
      content: "핀 컨텐츠임",
      thumbnailUrl: "",
      point: { lat: 37.497, lng: 127.0254 },
    },
    {
      id: 11,
      content: "핀 컨텐츠임",
      thumbnailUrl: "",
      point: { lat: 37.497, lng: 127.0254 },
    },
    {
      id: 11,
      content: "핀 컨텐츠임",
      thumbnailUrl: "",
      point: { lat: 37.497, lng: 127.0254 },
    },
  ],
};
