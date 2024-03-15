import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getPostDetail } from "@/lib/api/Post/server";
import PostController from "./Post.controller";

interface PostDetailProps {
  params: {
    id: string;
  };
}

const PostDetail = async ({ params }: PostDetailProps) => {
  const { id } = params;

  const session = await getServerSession(authOptions);
  const postData = await getPostDetail(session?.serviceToken!, id);

  if (!postData) {
    return;
  }

  return (
    <PostController
      postId={id}
      postData={postData}
    />
  );
};

export default PostDetail;
