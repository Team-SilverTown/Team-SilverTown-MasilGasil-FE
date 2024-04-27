import { DiarySkeleton } from "@/components/skeletons";

import dynamic from "next/dynamic";

const Diary = () => {
  const MasilDiaryView = dynamic(() => import("./MasilDiary.view"), {
    loading: () => <DiarySkeleton />,
  });
  return <MasilDiaryView />;
};

export default Diary;
