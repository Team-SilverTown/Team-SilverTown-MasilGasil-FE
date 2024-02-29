import { USER_VALIDATE } from "@/constants/userValidate";

export const USER_EDIT_ERROR_MESSAGE = {
  NICKNAME: {
    REQUIRE: "변경하실 닉네임을 입력해주세요.",
    MIN_LENGTH: `${USER_VALIDATE.NICKNAME.MIN_LENGTH}글자 이상을 입력해 주세요.`,
    MAX_LENGTH: `${USER_VALIDATE.NICKNAME.MAX_LENGTH}글자 이하로 입력해 주세요.`,
  },
  AGE: {
    REQUIRE: "변경하실 나이를 입력해주세요.",
  },
  HEIGHT: {
    REQUIRE: "변경하실 키를 입력해주세요.",
  },
  WEIGHT: {
    REQUIRE: "변경하실 몸무게를 입력해주세요.",
  },
};

export const USER_EDIT_PLACEHOLDER = {
  AGE: "수정하실 나이를 입력해주세요.",
  HEIGHT: "수정하실 키를 입력해주세요.",
  WEIGHT: "수정하실 몸무게를 입력해주세요.",
};
