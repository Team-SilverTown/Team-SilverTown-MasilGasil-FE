import { ProfileSkeleton } from "@/components/skeletons";

import dynamic from "next/dynamic";

interface MyPageProps {
  params: {
    id: number;
  };
}

const MyPage = ({ params }: MyPageProps) => {
  const { id } = params;

  const MypageController = dynamic(() => import("./MyPage.controller"), {
    loading: () => <ProfileSkeleton />,
  });

  return <MypageController userId={id} />;
};

export default MyPage;
