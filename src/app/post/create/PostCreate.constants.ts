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
  COMPLETE_STEP_ONE: "POST_CREATE_COMPLETE_STEP_ONE";
} = {
  INIT: "POST_CREATE_INIT",
  COMPLETE_STEP_ONE: "POST_CREATE_COMPLETE_STEP_ONE",
};

export const postCreateValidation = {
  title: {
    required: "제목을 입력해주세요.",
    minLength: {
      value: 2,
      message: "제목을 2글자 이상 입력해주세요.",
    },
    maxLength: {
      value: 32,
      message: "제목을 32글자 이하로 입력해주세요.",
    },
  },

  content: {
    required: "설명을 입력해주세요.",
    minLength: {
      value: 2,
      message: "설명을 2글자 이상 입력해주세요.",
    },
  },
};
