import { GET } from "../serverRootAPI";
import { TEST_ENDPOINT } from "../endPoints";

interface GetTest {
  serverTime: string;
}

export const serverGetTest = async () => {
  return await GET<GetTest>({ endPoint: TEST_ENDPOINT.TEST });
};
