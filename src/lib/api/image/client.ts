import { POST } from "../clientRootAPI";
import { END_POINT } from "../endPoints";

export const postImage = async ({ file }: { file: File | Blob }) => {
  const formData = new FormData();
  formData.append("file", file);

  return await POST<{ imageUrl: string }>({
    endPoint: END_POINT.IMAGE,
    data: formData,
    auth: true,
  });
};
