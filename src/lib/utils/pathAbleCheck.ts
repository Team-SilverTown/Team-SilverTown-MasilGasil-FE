/**
 * @description currentPathName 이 pathList 에 포함된 path 인 경우를 판별합니다.
 * @description pathList 에 포함된 경우 true
 * @param pathList - pathInable string array
 * @param currentPathName - 현재 경로
 **/
const pathAbleCheck = (pathList: string[], currentPathName: string) => {
  return pathList.some((path) => {
    // path 중 마지막에 * 접미사가 있는 경우 해당 경로로 시작하는 모든 경로에 대해 확인
    if (path.endsWith("*")) {
      const prefix = path.slice(0, -1);
      return currentPathName.startsWith(prefix);
    } else {
      return currentPathName === path;
    }
  });
};

export default pathAbleCheck;
