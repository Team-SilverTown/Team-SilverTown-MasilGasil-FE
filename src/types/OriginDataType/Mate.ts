import { GeoPosition } from ".";

export interface MateGatheringPlace {
  point: GeoPosition;
  detail: string;
}

export type MateParticipantStatus = "REQUESTED" | "ACCEPTED";

export interface Participant {
  id: number;
  userId: number;
  nickname: string;
  profileUrl: string | null;
  status: MateParticipantStatus;
  message: string;
}
