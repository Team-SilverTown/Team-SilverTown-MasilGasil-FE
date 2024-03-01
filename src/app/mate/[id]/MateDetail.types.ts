export interface MateMemberType {
  user_id: string;
  state: string;
  thumbnailUrl: string;
  nickname: string;
}

export interface MatePost {
  members: MateMemberType[];
}
