import dynamic from "next/dynamic";
import { DiarySkeleton } from "@/components/skeletons";

const Diary = ({ params: { id } }: { params: { id: string } }) => {
  const MasilDiaryView = dynamic(() => import("./MasilDiary.view"), {
    loading: () => <DiarySkeleton />,
  });
  return <MasilDiaryView />;
};

export default Diary;
