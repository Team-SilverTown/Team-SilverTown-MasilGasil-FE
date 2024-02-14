import { GET, POST } from "../rootAPI";
import { END_POINT } from "../endPoints";

interface GetTest {
  status: number;
}

interface PostTest {
  status: number;
}

export const getTest = async () => {
  return await GET<GetTest>({ endPoint: END_POINT.TEST });
};

export const postTest = async ({ data = "test" }: { data: string }) => {
  const formData = new FormData();
  formData.append("data", data);

  return await POST<PostTest>({ endPoint: END_POINT.TEST, data: formData });
};
