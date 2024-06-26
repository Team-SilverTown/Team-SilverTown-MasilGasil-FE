import * as GS from "../../MateDetail.styles";
import * as S from "./MateInfo.styles";

import Avatar from "@/components/Avatar";
import { Divider } from "@/components/Divider";
import convertFormatDate from "@/lib/utils/convertFormatDate";
import { Participant } from "@/types/OriginDataType";
import { MateDetailResponse } from "@/types/Response";

import { MateActions, MateDropDownMenu } from "./components";

interface MateInfoProps {
  acceptedUserList: Participant[];
  requestedUserList: Participant[];
  mateData: MateDetailResponse;
}

const MateInfo = ({ mateData, acceptedUserList, requestedUserList }: MateInfoProps) => {
  const { authorProfileUrl, authorNickname, content, gatheringAt, capacity, authorId } = mateData;

  return (
    <article className={`${GS.MateInformationContainer} py-4 flex flex-col gap-12`}>
      <div className="w-full flex items-center gap-6">
        <Avatar
          src={authorProfileUrl}
          size="sm"
          userId={authorId.toString()}
        />
        <p className="grow text-medium font-medium whitespace-nowrap">{authorNickname}</p>
        <MateDropDownMenu
          mateId={mateData.id}
          authorId={authorId}
        />
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
          <p className={S.MateInfoItemContent}>{`${acceptedUserList.length}/${capacity}명`}</p>
        </li>
      </ul>

      <MateActions
        acceptedUserList={acceptedUserList}
        requestedUserList={requestedUserList}
        mateData={mateData}
      />
    </article>
  );
};

export default MateInfo;
