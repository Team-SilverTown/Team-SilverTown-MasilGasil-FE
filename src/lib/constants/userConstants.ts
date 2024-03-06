const USER_VALIDATE_NUMBER = {
  NICKNAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 10,
  },
};

export const validation_user = {
  nickname: {
    required: "변경하실 닉네임을 입력해주세요.",
    minLength: {
      value: USER_VALIDATE_NUMBER.NICKNAME.MIN_LENGTH,
      message: `${USER_VALIDATE_NUMBER.NICKNAME.MIN_LENGTH}글자 이상을 입력해 주세요.`,
    },
    maxLength: {
      value: USER_VALIDATE_NUMBER.NICKNAME.MAX_LENGTH,
      message: `${USER_VALIDATE_NUMBER.NICKNAME.MAX_LENGTH}글자 이하로 입력해 주세요.`,
    },
  },

  height: {
    required: "키는 필수 항목입니다.",
    min: {
      value: 80,
      message: "값이 너무 작습니다.",
    },
    max: {
      value: 220,
      message: "값이 너무 큽니다.",
    },
  },

  weight: {
    required: "체중은 필수 항목입니다.",
    min: {
      value: 30,
      message: "값이 너무 작습니다.",
    },
    max: {
      value: 280,
      message: "값이 너무 큽니다.",
    },
  },

  birthDate: {
    required: "나이는 필수 항목입니다.",
    min: {
      value: 14,
      message: "14세 이상이어야 합니다",
    },
    max: {
      value: 100,
      message: "100세 이하여야 합니다",
    },
  },
};

export const USER_INPUT_PLACEHOLDER = {
  BIRTH_DATE: "나이를 선택해주세요.",

  HEIGHT: "키를 입력해주세요.",

  WEIGHT: "체중을 입력해주세요.",
};
