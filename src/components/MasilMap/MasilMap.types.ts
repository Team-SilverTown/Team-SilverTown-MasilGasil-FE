export type PathLineWeight = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type OnClickPin = (pinIndex: number) => void;

export type OnCreatePathLine = (polyline: kakao.maps.Polyline) => void;
