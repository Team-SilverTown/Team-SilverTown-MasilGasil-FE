import { PostCreateRequest } from "@/types/Request";

import {
  POST_CREATE_DEFAULT_REQUEST_VALUE,
  POST_CREATE_REDUCER_ACTION,
} from "../../PostCreate.constants";

type ReducerActionType = { type: "POST_CREATE_INIT"; payload: { defaultData: PostCreateRequest } };

const postCreateReducer = (state: PostCreateRequest, action: ReducerActionType) => {
  switch (action.type) {
    case POST_CREATE_REDUCER_ACTION.INIT: {
      const { defaultData } = action.payload;
      return defaultData;
    }

    default: {
      return POST_CREATE_DEFAULT_REQUEST_VALUE;
    }
  }
};

export default postCreateReducer;
