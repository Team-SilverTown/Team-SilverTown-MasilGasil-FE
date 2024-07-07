import { ProfileResponse } from "@/types/Response";

import { MyLocationWeather, MyWalkRecord } from "..";

interface myInfoProps {
  userInfo: ProfileResponse;
}

const MyInfo = ({ userInfo }: myInfoProps) => {
  return (
    <section className="w-full bg-background p-5">
      <MyLocationWeather />
      <MyWalkRecord userInfo={userInfo} />
    </section>
  );
};

export default MyInfo;
