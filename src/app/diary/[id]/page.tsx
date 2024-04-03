import { DiarySkeleton } from "@/components/skeletons";

import dynamic from "next/dynamic";

const Diary = ({ params: { id } }: { params: { id: string } }) => {
  const MasilDiaryView = dynamic(() => import("./MasilDiary.view"), {
    loading: () => <DiarySkeleton />,
  });
  return <MasilDiaryView />;
};

export default Diary;
