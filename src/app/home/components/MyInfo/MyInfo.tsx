import { ProfileResponse } from "@/types/Response";

import { MyLocationWeather, MyWalkRecord } from "..";

interface myInfoProps {
  userInfo: ProfileResponse;
}

const MyInfo = ({ userInfo }: myInfoProps) => {
  return (
    <section className="sticky top-24 z-10 w-full bg-background px-6 pt-8">
      <MyLocationWeather />
      <MyWalkRecord userInfo={userInfo} />
    </section>
  );
};

export default MyInfo;
