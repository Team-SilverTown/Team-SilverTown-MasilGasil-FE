export enum PostTabType {
  Memo = 0,
  Pin = 1,
  Mate = 2,
}

export interface MateDummyType {
  isEmpty: boolean;
  contents: MateDummyContents[];
  nextCursor: string | null;
}

export interface MateDummyContents {
  id: number;
  title: string;
  gatheringAt: string;
  status: "OPEN" | "CLOSED";
  capacity: number;
  authorId: number;
  authorNickname: string;
  authorProfileUrl: string | null;
}
