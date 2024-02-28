import { MasilRecordRequest } from "@/types/Request";
import { DEFAULT_LOG_DATA, LOG_RECORD_REDUCER_ACTIONS } from "../../LogRecord.constants";
import { GeoPosition } from "@/types/OriginDataType";
import getTwoPointDistance from "../../utils/getTwoPointDistance";
import { stat } from "fs";

type ActionsType =
  | { type: "RECORD_INIT" }
  | {
      type: "RECORD_CALCULATE_DISTANCE";
      payload: { polyLine: kakao.maps.Polyline };
    }
  | {
      type: "RECORD_CREATE_PIN";
      payload: { location: GeoPosition };
    };

const MIN_INSERT_PIN_RANGE = 10; // M 단위

const logRecordReducer = (state: MasilRecordRequest, action: ActionsType) => {
  switch (action.type) {
    case LOG_RECORD_REDUCER_ACTIONS.INIT:
      return DEFAULT_LOG_DATA;

    case LOG_RECORD_REDUCER_ACTIONS.CALCULATE_DISTANCE: {
      const { polyLine } = action.payload;
      const newDistance = Math.floor(polyLine.getLength());

      return {
        ...state,
        distance: newDistance,
      };
    }

    case LOG_RECORD_REDUCER_ACTIONS.CREATE_PIN: {
      const { location } = action.payload;
      const { pins } = state;

      for (const { point: checkPin } of pins) {
        const pointDistance = getTwoPointDistance(location, checkPin);

        if (pointDistance < MIN_INSERT_PIN_RANGE) {
          return state;
        }
      }

      const newPin = {
        point: location,
        content: "",
        thumbnailUrl: null,
      };

      return {
        ...state,
        pins: [...state.pins, newPin],
      };
    }

    default:
      return DEFAULT_LOG_DATA;
  }
};

export default logRecordReducer;
