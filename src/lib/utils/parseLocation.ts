import * as _ from "lodash";

import { LocationMap } from "@/types/OriginDataType";

/**
 * @description object 형태의 location 데이터를 문자열로 파싱하는 유틸 함수 입니다.
 */
const parseLocationObject = (locationData: LocationMap) => {
  return _.reduce(locationData, (acc, curr) => {
    if (!curr) return acc;
    return acc + " " + curr;
  });
};

export default parseLocationObject;
