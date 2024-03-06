import { PostCreateRequest } from "@/types/Request";

import {
  POST_CREATE_DEFAULT_REQUEST_VALUE,
  POST_CREATE_REDUCER_ACTION,
} from "../../PostCreate.constants";

type ReducerActionType =
  | { type: "POST_CREATE_INIT"; payload: { defaultData: PostCreateRequest } }
  | {
      type: "POST_CREATE_COMPLETE_STEP_ONE";
      payload: { content: string; title: string; isPublic: boolean };
    };

const postCreateReducer = (state: PostCreateRequest, action: ReducerActionType) => {
  switch (action.type) {
    case POST_CREATE_REDUCER_ACTION.INIT: {
      const { defaultData } = action.payload;
      return defaultData;
    }

    case POST_CREATE_REDUCER_ACTION.COMPLETE_STEP_ONE: {
      const { content, title, isPublic } = action.payload;
      return {
        ...state,
        content,
        title,
        isPublic,
      };
    }

    default: {
      return POST_CREATE_DEFAULT_REQUEST_VALUE;
    }
  }
};

export default postCreateReducer;
