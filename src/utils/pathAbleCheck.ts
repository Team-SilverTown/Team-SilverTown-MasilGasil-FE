/**
 * @description currentPathName 이 pathList 에 포함된 path 인 경우를 판별합니다.
 * @description pathList 에 포함된 경우 true
 * @param pathList - pathInable string array
 * @param currentPathName - 현재 경로
 **/
export function pathAbleCheck(pathList: string[], currentPathName: string) {
  return pathList.some((path) => {
    if (path.endsWith("*")) {
      const prefix = path.slice(0, -1);
      return currentPathName.startsWith(prefix);
    } else {
      return currentPathName === path;
    }
  });
}
