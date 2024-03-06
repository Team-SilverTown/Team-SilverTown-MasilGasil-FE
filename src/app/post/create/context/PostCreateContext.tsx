import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { PostCreatePageStep } from "../PostCreate.types";
import { MasilResponse } from "@/types/Response";
import postCreateReducer from "./reducer/PostCreateReducer";
import {
  POST_CREATE_DEFAULT_REQUEST_VALUE,
  POST_CREATE_REDUCER_ACTION,
} from "../PostCreate.constants";

interface PostCreateContextProviderProps {
  logData: MasilResponse;
  children: React.ReactNode;
}

interface PostCreateContextValues {
  pageStep: PostCreatePageStep;
  setPageStep: Dispatch<SetStateAction<PostCreatePageStep>>;
}

const PostCreateContext = createContext<PostCreateContextValues>({
  pageStep: "POST_CREATE_TEXT_EDIT",
  setPageStep: () => {},
});

export const PostCreateContextProvider = ({
  children,
  logData,
}: PostCreateContextProviderProps) => {
  const [postData, dispatch] = useReducer(postCreateReducer, POST_CREATE_DEFAULT_REQUEST_VALUE);
  const [pageStep, setPageStep] = useState<PostCreatePageStep>("POST_CREATE_TEXT_EDIT");

  useEffect(() => {
    dispatch({ type: POST_CREATE_REDUCER_ACTION.INIT, payload: { logData } });
  }, []);

  return (
    <PostCreateContext.Provider value={{ pageStep, setPageStep }}>
      {children}
    </PostCreateContext.Provider>
  );
};

const usePostCreateContext = () => {
  const contextValue = useContext(PostCreateContext);
  return contextValue;
};

export default usePostCreateContext;
