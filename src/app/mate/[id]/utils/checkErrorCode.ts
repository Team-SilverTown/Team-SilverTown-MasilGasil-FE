const checkMateDetailErrorCode = (errorCode: string) => {
  switch (errorCode) {
    case "20016002":
      return " ";

    default:
      return "";
  }
};

export default checkMateDetailErrorCode;
