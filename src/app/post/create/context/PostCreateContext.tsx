import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { PostCreatePageStep } from "../PostCreate.types";

interface PostCreateContextProviderProps {
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

export const PostCreateContextProvider = ({ children }: PostCreateContextProviderProps) => {
  const [pageStep, setPageStep] = useState<PostCreatePageStep>("POST_CREATE_TEXT_EDIT");

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
