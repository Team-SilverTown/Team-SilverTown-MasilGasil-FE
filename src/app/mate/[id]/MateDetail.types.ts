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
  members: MateMemberType[];
}
