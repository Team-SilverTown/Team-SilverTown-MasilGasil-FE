import usePostCreateController from "./PostCreate.controller";

const PostCreateView = () => {
  const { pageStep } = usePostCreateController();

  return <div>{pageStep}</div>;
};

export default PostCreateView;
