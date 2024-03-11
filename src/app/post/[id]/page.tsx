import PostController from "./Post.controller";

interface PostDetailProps {
  params: {
    id: number;
  };
}

const PostDetail = async ({ params }: PostDetailProps) => {
  const { id } = params;
  const baseLocation = { lat: 37.15601397875854, lng: 127.07667498944193 };

  return (
    <PostController
      postId={id}
      baseLocation={baseLocation}
    />
  );
};

export default PostDetail;
