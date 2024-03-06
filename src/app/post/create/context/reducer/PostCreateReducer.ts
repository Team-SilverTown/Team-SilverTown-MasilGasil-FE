import { PostCreateRequest } from "@/types/Request";
import { MasilResponse } from "@/types/Response";
import {
  POST_CREATE_DEFAULT_REQUEST_VALUE,
  POST_CREATE_REDUCER_ACTION,
} from "../../PostCreate.constants";

type ReducerActionType = { type: "POST_CREATE_INIT"; payload: { logData: MasilResponse } };

const postCreateReducer = (state: PostCreateRequest, action: ReducerActionType) => {
  switch (action.type) {
    case POST_CREATE_REDUCER_ACTION.INIT: {
      const {
        depth1,
        depth2,
        depth3,
        depth4,
        path,
        title,
        content,
        distance,
        totalTime,
        pins,
        thumbnailUrl,
      } = action.payload.logData;

      return {
        depth1,
        depth2,
        depth3,
        depth4,
        path,
        title,
        content,
        distance,
        totalTime,
        isPublic: true,
        pins,
        thumbnailUrl,
      };
    }

    default: {
      return POST_CREATE_DEFAULT_REQUEST_VALUE;
    }
  }
};

export default postCreateReducer;
