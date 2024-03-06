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
      const { logData } = action.payload;

      return {
        depth1: logData.depth1,
        depth2: logData.depth2,
        depth3: logData.depth3,
        depth4: logData.depth4,
        path: logData.path,
        title: logData.title,
        content: logData.content,
        distance: logData.distance,
        totalTime: logData.totalTime,
        isPublic: true,
        pins: logData.pins,
        thumbnailUrl: logData.thumbnailUrl,
      };
    }

    default: {
      return POST_CREATE_DEFAULT_REQUEST_VALUE;
    }
  }
};

export default postCreateReducer;
