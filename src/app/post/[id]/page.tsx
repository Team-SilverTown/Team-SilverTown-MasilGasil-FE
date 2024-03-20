import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getPostDetail } from "@/lib/api/Post/server";
import PostController from "./Post.controller";
import { getMateDetailList } from "@/lib/api/Mate/server";

interface PostDetailProps {
  params: {
    id: string;
  };
}

const PostDetail = async ({ params }: PostDetailProps) => {
  const { id } = params;

  const session = await getServerSession(authOptions);
  const postData = await getPostDetail(session?.serviceToken!, id);
  const mateData = await getMateDetailList({ postId: Number(id) });

  if (!postData || !mateData) {
    return;
  }

  return (
    <PostController
      postId={id}
      postData={postData}
      mateData={mateData}
    />
  );
};

export default PostDetail;
