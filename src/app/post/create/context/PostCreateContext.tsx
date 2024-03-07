import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  HandleClickPin,
  HandleCompleteStepOne,
  HandleRemovePin,
  PostCreatePageStep,
} from "../PostCreate.types";
import { MasilResponse } from "@/types/Response";
import postCreateReducer from "./reducer/PostCreateReducer";
import {
  POST_CREATE_DEFAULT_REQUEST_VALUE,
  POST_CREATE_REDUCER_ACTION,
} from "../PostCreate.constants";
import { PostCreateRequest } from "@/types/Request";
import { useUI } from "@/components/uiContext/UiContext";

interface PostCreateContextProviderProps {
  defaultData: PostCreateRequest;
  children: React.ReactNode;
}

interface PostCreateContextValues {
  postData: PostCreateRequest;
  pageStep: PostCreatePageStep;
  setPageStep: Dispatch<SetStateAction<PostCreatePageStep>>;
  handleCompleteStepOne: HandleCompleteStepOne;
  handleClickPin: HandleClickPin;
  handleRemovePin: HandleRemovePin;
}

const PostCreateContext = createContext<PostCreateContextValues>({
  postData: POST_CREATE_DEFAULT_REQUEST_VALUE,
  pageStep: "POST_CREATE_TEXT_EDIT",
  setPageStep: () => {},
  handleCompleteStepOne: () => {},
  handleClickPin: () => {},
  handleRemovePin: () => {},
});

export const PostCreateContextProvider = ({
  children,
  defaultData,
}: PostCreateContextProviderProps) => {
  const [postData, dispatch] = useReducer(postCreateReducer, defaultData);
  const [pageStep, setPageStep] = useState<PostCreatePageStep>("POST_CREATE_TEXT_EDIT");
  const [currentPinIndex, setCurrentPinIndex] = useState(-1);

  const { setModalView, openModal, closeModal } = useUI();

  useEffect(() => {
    dispatch({ type: POST_CREATE_REDUCER_ACTION.INIT, payload: { defaultData } });
  }, []);

  const handleCompleteStepOne: HandleCompleteStepOne = (newData) => {
    dispatch({ type: POST_CREATE_REDUCER_ACTION.COMPLETE_STEP_ONE, payload: newData });
  };

  const handleClickPin: HandleClickPin = (pinIndex) => {
    setCurrentPinIndex(pinIndex);
    setModalView("PIN_EDIT_VIEW");

    openModal({
      onClickAccept: (imageUrl: string | null, pinContent: string | null) => {
        dispatch({
          type: POST_CREATE_REDUCER_ACTION.PIN_UPDATE,
          payload: {
            pinIndex,
            imageUrl,
            pinContent,
          },
        });
        setCurrentPinIndex(-1);
        closeModal();
      },

      onClickRemove: (pinIndex: number) => {
        handleRemovePin(pinIndex);
        closeModal();
      },

      pinIndex,
      pin: postData.pins[pinIndex],
    });
  };

  const handleRemovePin: HandleRemovePin = (pinIndex: number) => {
    dispatch({ type: POST_CREATE_REDUCER_ACTION.PIN_REMOVE, payload: { pinIndex } });
  };
  console.log(postData);

  return (
    <PostCreateContext.Provider
      value={{
        pageStep,
        setPageStep,
        postData,
        handleCompleteStepOne,
        handleClickPin,
        handleRemovePin,
      }}
    >
      {children}
    </PostCreateContext.Provider>
  );
};

const usePostCreateContext = () => {
  const contextValue = useContext(PostCreateContext);
  return contextValue;
};

export default usePostCreateContext;
