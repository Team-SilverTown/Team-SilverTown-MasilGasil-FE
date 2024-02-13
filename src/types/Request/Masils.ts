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

  // M 단위 합의 보기
  distance: number;

  totalTime: number;

  startedAt: string;

  // 추후 협의후 정의
  pinPoints: PinPoint[];

  // File 인가
  thumbnail: File | null;
  postId: string;
}

export interface PinPoint {
  content: string;
  // 네이밍 변경 제안 - position
  location: {
    lat: number;
    lng: number;
  };
  pointImage: File | null;
}
