import * as GS from "../../MateDetail.styles";

import Avatar from "@/components/Avatar/Avatar";
import { MateToggleMenu } from "./components";

const MateInfo = () => {
  return (
    <article className={GS.MateInformationContainer}>
      <div className="w-full flex items-center gap-6">
        <Avatar size="sm" />
        <p className="grow text-medium font-medium whitespace-nowrap">재영</p>
        <MateToggleMenu />
      </div>
    </article>
  );
};

export default MateInfo;
