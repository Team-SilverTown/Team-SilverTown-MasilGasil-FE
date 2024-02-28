import { MasilRecordRequest } from "@/types/Request";

interface LogRecordReducerType {
  INIT: "RECORD_INIT";
  CALCULATE_DISTANCE: "RECORD_CALCULATE_DISTANCE";
  CREATE_PIN: "RECORD_CREATE_PIN";
}
export const LOG_RECORD_REDUCER_ACTIONS: LogRecordReducerType = {
  INIT: "RECORD_INIT",
  CALCULATE_DISTANCE: "RECORD_CALCULATE_DISTANCE",
  CREATE_PIN: "RECORD_CREATE_PIN",
};

export const DEFAULT_LOG_DATA: MasilRecordRequest = {
  depth1: "",
  depth2: "",
  depth3: "",
  depth4: "",
  path: [],
  title: "",
  content: "",
  distance: 0,
  totalTime: 0,
  startedAt: "",
  pins: [],
  thumbnailUrl: null,
  postId: null,
};

export const LOG_RECORD_MESSAGE = {
  ERROR: {
    WATCH_PERMISSION_DENIED: "현재 위치 서비스에 동의하지 않았습니다. 동의 후 이용 가능합니다.",
    WATCH_ERROR: "서비스에 문제가 발생했습니다. 잠시 후 이용해주세요.",
  },

  FALL_BACK: {
    MESSAGE: "모든 기록이 사라집니다. 진짜로 뒤로 가쉴...?",
    WARNING_MESSAGE: "현재의 기록은 저장되지 않고 사라집니다.",
  },

  REGION_ERROR: {
    MESSAGE: "현재 위치의 주소를 불러오는데 실패했습니다. 잠시 후 다시 이용해주세요.",
  },

  COMPLETE_RECORD: {
    MESSAGE: "산책을 마무리 하실건가요?",
    WARNING_MESSAGE: "해당 페이지로 되돌아올 수 없습니다.",
    ACCEPT_BUTTON: "완료",
  },
  RECORD_DONE: {
    MESSAGE: "기록을 완료했어요!",
    PROPOSAL: "방금 다녀온 산책을 유저들과 공유해보세요.",
  },
};
