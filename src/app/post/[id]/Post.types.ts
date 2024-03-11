import { GeoPosition, IntensityOption } from "@/types/OriginDataType";

export enum PostTabType {
  Memo = 0,
  Pin = 1,
  Mate = 2,
}

export interface UserDummyType {
  sex: "MALE" | "FEMALE" | undefined;
  weight: number | undefined;
  height: number | undefined;
  birthDate: string | undefined;
  exerciseIntensity: IntensityOption | undefined;
}

export interface MateDummyType {
  id: number;
  title: string;
  content: string;
  gatheringPlace: GatheringPlaceType;
  gatherAt: string;
  currentParticipants: CurrentParticipantsType;
  capacity: number;
  authorId: number;
  authorNickname: string;
  authorProfileUrl: string | null;
}

interface GatheringPlaceType {
  point: GeoPosition;
  detail: string;
}

interface CurrentParticipantsType {
  participants: participantsType[];
}

interface participantsType {
  id: number;
  nickname: string;
  profileUrl: string | null;
}
