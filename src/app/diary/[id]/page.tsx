import MasilDiaryView from "./MasilDiary.view";

const Diary = ({ params: { id } }: { params: { id: string } }) => {
  // TODO: 쿼리 파라미터를 조회하여 서버에 GET 요청, 해당 기간의 로그 기록 데이터를 받아옴
  // TODO: View는 로그 기록 데이터를 프롭으로 받고, 내부에서 처리
  return <MasilDiaryView />;
};

export default Diary;
