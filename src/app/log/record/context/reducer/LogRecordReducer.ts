import { MasilRecordRequest } from "@/types/Request";
import { DEFAULT_LOG_DATA, LOG_RECORD_REDUCER_ACTIONS } from "../../LogRecord.constants";
import { GeoPosition } from "@/types/OriginDataType";
import getTwoPointDistance from "../../utils/getTwoPointDistance";
import { useUI } from "@/components/uiContext/UiContext";

type ActionsType =
  | { type: "RECORD_INIT" }
  | {
      type: "RECORD_CALCULATE_DISTANCE";
      payload: { polyLine: kakao.maps.Polyline };
    }
  | {
      type: "RECORD_CREATE_PIN";
      payload: { location: GeoPosition };
    }
  | {
      type: "RECORD_UPDATE_PIN";
      payload: {
        pinIndex: number;
        imageUrl: string | null;
        pinContent: string | null;
      };
    }
  | {
      type: "RECORD_REMOVE_PIN";
      payload: { pinIndex: number };
    };

const MIN_INSERT_PIN_RANGE = 10; // M 단위

const logRecordReducer = (state: MasilRecordRequest, action: ActionsType) => {
  switch (action.type) {
    case LOG_RECORD_REDUCER_ACTIONS.INIT:
      return DEFAULT_LOG_DATA;

    /**
     * @summary 전달받은 경로(polyline) 데이터 내부의 getLength 함수를 통해
     *
     * 경로 거리를 M단위로 전달받고 LogData에 업로드 합니다.
     */
    case LOG_RECORD_REDUCER_ACTIONS.CALCULATE_DISTANCE: {
      const { polyLine } = action.payload;
      const newDistance = Math.floor(polyLine.getLength());

      return {
        ...state,
        distance: newDistance,
      };
    }

    /**
     * @summary 현재 위치에 핀을 추가하는 함수
     *
     * 특정 거리 이내에 핀이 존재할경우 찍히지 앟음.
     */
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

    case LOG_RECORD_REDUCER_ACTIONS.UPDATE_PIN: {
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

    case LOG_RECORD_REDUCER_ACTIONS.REMOVE_PIN: {
      const { pinIndex } = action.payload;
      return {
        ...state,
        pins: state.pins.filter((_, index) => index !== pinIndex),
      };
    }

    default:
      return DEFAULT_LOG_DATA;
  }
};

export default logRecordReducer;
