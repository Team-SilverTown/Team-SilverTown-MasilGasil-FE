import * as S from "./MyInfo.styles";

import { ProfileResponse } from "@/types/Response";

import { MyLocationWeather, MyWalkRecord } from "..";

interface myInfoProps {
  userInfo: ProfileResponse;
}

const MyInfo = ({ userInfo }: myInfoProps) => {
  return (
    <section className={S.MyInfoSection}>
      <MyLocationWeather />
      <MyWalkRecord userInfo={userInfo} />
    </section>
  );
};

export default MyInfo;
