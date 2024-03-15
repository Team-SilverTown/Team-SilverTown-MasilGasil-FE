import * as GS from "../../MateDetail.styles";
import * as S from "./MateInfo.styles";

import { MateActions, MateDropDownMenu } from "./components";
import Divider from "@/components/Divider/Divider";
import Avatar from "@/components/Avatar";
import { MateDetailResponse } from "@/types/Response";
import convertFormatDate from "@/utils/convertFormatDate";

interface MateInfoProps {
  postId: string;
  mateData: MateDetailResponse;
}

const MateInfo = ({ mateData, postId }: MateInfoProps) => {
  const {
    authorProfileUrl,
    authorNickname,
    content,
    gatheringAt,
    capacity,
    participants,
    authorId,
  } = mateData;

  const AcceptedUserList = participants.filter(({ status }) => status === "ACCEPTED");

  return (
    <article className={`${GS.MateInformationContainer} py-4 flex flex-col gap-12`}>
      <div className="w-full flex items-center gap-6">
        <Avatar
          src={authorProfileUrl}
          size="sm"
          userId={authorId.toString()}
        />
        <p className="grow text-medium font-medium whitespace-nowrap">{authorNickname}</p>
        <MateDropDownMenu postId={postId} />
      </div>

      <p className="w-full text-medium font-medium leading-normal">{content}</p>

      <ul className={S.MateInfoList}>
        <li className={S.MateInfoItem}>
          <p className={S.MateInfoItemTitle}>모임 시간</p>
          <p className={S.MateInfoItemContent}>{convertFormatDate(gatheringAt)}</p>
        </li>

        <Divider isColumn />

        <li className={S.MateInfoItem}>
          <p className={S.MateInfoItemTitle}>모임 인원</p>
          <p className={S.MateInfoItemContent}>{`${AcceptedUserList.length}/${capacity}명`}</p>
        </li>
      </ul>

      <MateActions />
    </article>
  );
};

export default MateInfo;
