import { GET, POST } from "../clientRootAPI";
import { TEST_ENDPOINT } from "../endPoints";

interface GetTest {
  serverTime: string;
}

interface PostTest {
  data: string;
}

export const getTest = async () => {
  return await GET<GetTest>({ endPoint: TEST_ENDPOINT.TEST });
};

export const postTest = async ({ data = "test" }: { data: string }) => {
  const formData = new FormData();
  formData.append("data", data);

  return await POST<PostTest>({ endPoint: TEST_ENDPOINT.TEST_POST, data: formData });
};
