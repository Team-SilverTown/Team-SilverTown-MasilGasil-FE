import Setting from "@/components/icons/Setting";

import Link from "next/link";

interface MyPageSettingProps {
  userId: number;
}

const MyPageSetting = ({ userId }: MyPageSettingProps) => {
  return (
    <Link
      href={`/user/${userId}/setting`}
      title="설정 페이지 바로가기"
      style={{ marginRight: "1.5rem" }}
    >
      <Setting />
    </Link>
  );
};

export default MyPageSetting;
