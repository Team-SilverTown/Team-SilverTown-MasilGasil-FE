import MasilDiaryView from "./MasilDiary.view";

const Diary = ({ params: { id } }: { params: { id: string } }) => {
  return <MasilDiaryView id={id} />;
};

export default Diary;
