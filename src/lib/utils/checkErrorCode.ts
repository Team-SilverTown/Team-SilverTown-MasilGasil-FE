const checkErrorCode = ({
  errorCode,
  defaultMessage,
}: {
  errorCode: string;
  defaultMessage?: string;
}) => {
  switch (errorCode) {
    case "20016002":
      return " ";

    // --------------  Mate Participant  ----------

    case "30090400":
      // 참여자의 유저 정보가 존재하지 않을 경우
      return "해당 사용자가 존재하지 않습니다.";

    case "30090300":
      // 본인/메이트 작성자가 아닌 사람이 참여자에 대한 조작을 할 경우
      return "해당 메이트 조작 권한이 없습니다.";

    case "30090001":
      // 참여자의 유저 id가 null로 들어올 경우
      return "해당 메이트 참여자를 확인할 수 없습니다.";

    case "30090000":
      // 참여하려는 메이트의 작성자 id가 null로 들어올 경우
      return "해당 메이트의 작성자를 확인할 수 없습니다.";

    case "30040400":
      // 메이트의 포스트가 존재하지 않을 경우
      return "기존의 산책로 포스트를 찾을 수 없습니다.";

    default:
      return defaultMessage ? defaultMessage : "오류가 발생했습니다.";
  }
};

export default checkErrorCode;
