export interface MateMemberType {
  user_id: string;
  state: string;
  thumbnailUrl: string;
  nickname: string;
}

export interface UserEvaluationType {
  kind: number;
  time: number;
  bad: number;
}

export interface MatePost {
  authorNickname: string;
  authorThumbnailUrl: string;

  content: string;

  mateTime: string;
  mateLocation: string;

  recruitedUser: number;
  recruitingUser: number;

  members: MateMemberType[];
}
