import { POST } from "../clientRootAPI";
import { IMAGE } from "../endPoints";

export const postImage = async ({ file }: { file: File | Blob }) => {
  const formData = new FormData();
  formData.append("file", file);

  return await POST<{ imageUrl: string }>({ endPoint: IMAGE, data: formData, auth: true });
};
