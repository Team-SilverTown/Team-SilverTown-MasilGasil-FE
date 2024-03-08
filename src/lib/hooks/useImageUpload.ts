import { useMutation } from "@tanstack/react-query";
import { IMAGE_UPLOAD_KEY } from "../api/queryKeys";
import { postImage } from "../api/image/client";

const useImageUpload = () => {
  const mutation = useMutation({
    mutationKey: [IMAGE_UPLOAD_KEY],
    mutationFn: async (file: File) => await postImage({ file }),
  });

  return mutation;
};

export default useImageUpload;
