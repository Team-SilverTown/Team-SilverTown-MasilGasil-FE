import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { HandleCompleteStepOne, PostCreatePageStep } from "../PostCreate.types";
import { MasilResponse } from "@/types/Response";
import postCreateReducer from "./reducer/PostCreateReducer";
import {
  POST_CREATE_DEFAULT_REQUEST_VALUE,
  POST_CREATE_REDUCER_ACTION,
} from "../PostCreate.constants";
import { PostCreateRequest } from "@/types/Request";

interface PostCreateContextProviderProps {
  defaultData: PostCreateRequest;
  children: React.ReactNode;
}

interface PostCreateContextValues {
  postData: PostCreateRequest;
  pageStep: PostCreatePageStep;
  setPageStep: Dispatch<SetStateAction<PostCreatePageStep>>;
  handleCompleteStepOne: HandleCompleteStepOne;
}

const PostCreateContext = createContext<PostCreateContextValues>({
  postData: POST_CREATE_DEFAULT_REQUEST_VALUE,
  pageStep: "POST_CREATE_TEXT_EDIT",
  setPageStep: () => {},
  handleCompleteStepOne: () => {},
});

export const PostCreateContextProvider = ({
  children,
  defaultData,
}: PostCreateContextProviderProps) => {
  const [postData, dispatch] = useReducer(postCreateReducer, defaultData);
  const [pageStep, setPageStep] = useState<PostCreatePageStep>("POST_CREATE_TEXT_EDIT");

  useEffect(() => {
    dispatch({ type: POST_CREATE_REDUCER_ACTION.INIT, payload: { defaultData } });
  }, []);

  const handleCompleteStepOne: HandleCompleteStepOne = (newData) => {
    dispatch({ type: POST_CREATE_REDUCER_ACTION.COMPLETE_STEP_ONE, payload: newData });
  };

  return (
    <PostCreateContext.Provider value={{ pageStep, setPageStep, postData, handleCompleteStepOne }}>
      {children}
    </PostCreateContext.Provider>
  );
};

const usePostCreateContext = () => {
  const contextValue = useContext(PostCreateContext);
  return contextValue;
};

export default usePostCreateContext;
