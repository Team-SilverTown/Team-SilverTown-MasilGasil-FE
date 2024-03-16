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
    }
  | {
      type: "POST_CREATE_PIN_UPDATE";
      payload: {
        pinIndex: number;
        imageUrl: string | null;
        pinContent: string | null;
      };
    }
  | { type: "POST_CREATE_PIN_REMOVE"; payload: { pinIndex: number } };

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

    case POST_CREATE_REDUCER_ACTION.PIN_UPDATE: {
      const { pinIndex, imageUrl, pinContent } = action.payload;
      const newPins = [...state.pins];

      if (imageUrl) {
        newPins[pinIndex].thumbnailUrl = imageUrl;
      }

      if (pinContent) {
        newPins[pinIndex].content = pinContent;
      }

      return {
        ...state,
        pins: newPins,
      };
    }

    case POST_CREATE_REDUCER_ACTION.PIN_REMOVE: {
      const { pinIndex } = action.payload;
      return {
        ...state,
        pins: state.pins.filter((_, index) => index !== pinIndex),
      };
    }

    default: {
      return POST_CREATE_DEFAULT_REQUEST_VALUE;
    }
  }
};

export default postCreateReducer;
