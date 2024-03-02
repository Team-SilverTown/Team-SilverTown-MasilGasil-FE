export interface WalkListProps {
  title: string;
  urlLink: string;
  walkList: MasilsListType[] | PostsListType[];
  type: "Masils" | "Posts";
}

export interface MasilsListType {
  id: string;
  user_id: string;
  post_id: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  path: [];
  title: string;
  content: string;
  thumbnail_url: string;
  distance: string;
  total_time: string;
  started_at: string;
  created_at: string;
  updated_at: string;
}

export interface PostsListType {
  id: string;
  user_id: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  path: [];
  title: string;
  content: string;
  thumbnail: string;
  is_public: boolean;
  distance: string;
  total_time: string;
  view_count: number;
  like_count: number;
  created_at: string;
  updated_at: string;
}

export type WeatherType = "맑음" | "구름조금" | "흐림";
export type Precipitation = "없음" | "비" | "진눈개비" | "눈";
