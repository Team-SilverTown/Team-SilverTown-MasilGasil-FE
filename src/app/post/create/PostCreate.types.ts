export type PostCreatePageStep = "POST_CREATE_TEXT_EDIT" | "POST_CREATE_PIN_EDIT";

export interface PostCreateInputValue {
  title: string;
  content: string;
  thumbnail: File | null;
}

export type HandleCompleteStepOne = (data: {
  title: string;
  content: string;
  isPublic: boolean;
}) => void;

export type HandleClickPin = (pinIndex: number) => void;

export type HandleRemovePin = (pinIndex: number) => void;
