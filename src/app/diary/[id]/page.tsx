import MasilDiaryView from "./MasilDiary.view";

const Diary = ({ params: { id } }: { params: { id: string } }) => {
  //TODO: /api/v1/masils/period를 통해 현재 기간의 로그 기록을 서버로부터 먼저 가져옴 (SSR)
  return <MasilDiaryView />;
};

export default Diary;
