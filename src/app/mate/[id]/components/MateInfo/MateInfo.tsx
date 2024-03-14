import * as GS from "../../MateDetail.styles";
import style from "./MateInfo.styles.module.css";

import { MateActions, MateDropDownMenu } from "./components";
import Divider from "@/components/Divider/Divider";
import Avatar from "@/components/Avatar";
import { MateDetailResponse } from "@/types/Response";

interface MateInfoProps {
  postId: string;
  mateData: MateDetailResponse;
}

const MateInfo = ({ mateData, postId }: MateInfoProps) => {
  const { authorProfileUrl, authorNickname, content, gatheringAt, capacity, participants } =
    mateData;

  const AcceptedUser = participants.filter(({ status }) => status === "ACCEPTED");

  return (
    <article className={`${GS.MateInformationContainer} py-4 flex flex-col gap-12`}>
      <div className="w-full flex items-center gap-6">
        <Avatar
          src={authorProfileUrl}
          size="sm"
        />
        <p className="grow text-medium font-medium whitespace-nowrap">{authorNickname}</p>
        <MateDropDownMenu postId={postId} />
      </div>

      <p className="w-full text-medium font-medium leading-normal">{content}</p>

      <ul className={style.mate_info__list}>
        <li className={style.mate_info__item}>
          <p className={style.mate_info__item_title}>모임 시간</p>
          <p className={style.mate_info__item_text}>{gatheringAt}</p>
        </li>

        <Divider isColumn />

        <li className={style.mate_info__item}>
          <p className={style.mate_info__item_title}>모임 인원</p>
          <p className={style.mate_info__item_text}>{`${AcceptedUser.length}/${capacity}명`}</p>
        </li>
      </ul>

      <MateActions />
    </article>
  );
};

export default MateInfo;
