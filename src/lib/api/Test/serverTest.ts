import { SERVER_GET } from "../serverRootAPI";
import { TEST_ENDPOINT } from "../endPoints";

interface GetTest {
  serverTime: string;
}

export const serverGetTest = async () => {
  return await SERVER_GET<GetTest>({ endPoint: TEST_ENDPOINT.TEST });
};
