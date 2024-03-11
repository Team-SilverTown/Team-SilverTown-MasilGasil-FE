import PostController from "./Post.controller";

interface PostDetailProps {
  params: {
    id: string;
  };
}

const PostDetail = async ({ params }: PostDetailProps) => {
  const { id } = params;

  return <PostController postId={id} />;
};

export default PostDetail;
