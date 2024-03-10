import MypageController from "./MyPage.controller";

interface MyPageProps {
  params: {
    id: number;
  };
}

const MyPage = ({ params }: MyPageProps) => {
  const { id } = params;

  return <MypageController userId={id} />;
};

export default MyPage;
