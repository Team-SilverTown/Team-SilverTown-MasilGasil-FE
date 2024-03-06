export type PostCreatePageStep = "POST_CREATE_TEXT_EDIT" | "POST_CREATE_PIN_EDIT";

export interface PostCreateInputValue {
  title: string;
  content: string;
}

export type HandleCompleteStepOne = (data: {
  title: string;
  content: string;
  isPublic: boolean;
}) => void;
