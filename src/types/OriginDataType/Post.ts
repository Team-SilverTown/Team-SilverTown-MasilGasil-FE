export interface PostListItem {
  id: number;
  address: {
    depth1: string;
    depth2: string;
    depth3: string;
    depth4: string;
  };
  title: string;
  content: string;
  totalTime: number;
  distance: number;
  viewCount: number;
  likeCount: number;
  thumbnailUrl: string;
  hasMate: boolean;
  liked: boolean;
}
