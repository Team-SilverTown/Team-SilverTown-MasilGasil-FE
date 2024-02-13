export type LogCreateStep = "LOG_CREATE_STEP_1" | "LOG_CREATE_STEP_2" | "LOG_CREATE_STEP_3";

export interface Position {
  lat: number;
  lng: number;
}

export interface LogType {
  location1: string;
  location2: string;
  location3: string;

  // 수정
  path: Position[];

  title: string;
  content: string;

  // 갈로리 소모량에 대한 값
  distance: number;
  totalTime: number;

  startedAt: string;

  // 추후 협의후 정의
  pinPoints: PinPoint[];

  // File 인가
  thumbnail: File | null;
  postId: string;
}

const DEFAULT_LOG_DATA = {
  location1: "",
  location2: "",
  location3: "",

  // 수정
  path: [],

  title: "",
  content: "",

  // 갈로리 소모량에 대한 값 - number ? string ?
  distance: 0,
  totalTime: 0,

  // number ? string ?
  startedAt: "",

  // 추후 협의후 정의
  pinPoints: [],

  // File 인가
  thumbnail: null,
  postId: "",
};

export interface PinPoint {
  content: string;
  // 네이밍 변경 제안 - position
  location: {
    lat: number;
    lng: number;
  };
  pointImage: File;
}
