import { LOG_RECORD_ERROR_MESSAGE } from "../LogRecord.constants";

const checkMasilErrorCode = (errorCode: string) => {
  switch (errorCode) {
    case "20016002":
      return LOG_RECORD_ERROR_MESSAGE.MIN_LENGTH;

    default:
      return LOG_RECORD_ERROR_MESSAGE.DEFAULT;
  }
};

export default checkMasilErrorCode;
