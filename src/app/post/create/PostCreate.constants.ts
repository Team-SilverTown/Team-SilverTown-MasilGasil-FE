import { PostCreateRequest } from "@/types/Request";

export const POST_CREATE_DEFAULT_REQUEST_VALUE: PostCreateRequest = {
  depth1: "",
  depth2: "",
  depth3: "",
  depth4: "",
  path: [],

  title: "",
  content: "",

  distance: 0,
  totalTime: 0,
  isPublic: true,
  pins: [],
  thumbnailUrl: "",
};

export const POST_CREATE_REDUCER_ACTION: {
  INIT: "POST_CREATE_INIT";
} = {
  INIT: "POST_CREATE_INIT",
};
