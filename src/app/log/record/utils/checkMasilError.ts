const checkMasilErrorCode = (errorCode: string) => {
  console.log(errorCode);

  switch (errorCode) {
    case "20016002":
      return "산책하신 경로가 너무 적습니다.<br>100m 이상부터 산책을 기록하실 수 있습니다.";

    default:
      return `산책로 저장에 오류가 발생하였습니다.<br>잠시 후 다시 시도해주세요.`;
  }
};

export default checkMasilErrorCode;
