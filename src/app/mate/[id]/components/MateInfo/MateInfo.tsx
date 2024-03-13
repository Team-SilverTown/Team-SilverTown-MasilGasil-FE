import * as GS from "../../MateDetail.styles";
import style from "./MateInfo.styles.module.css";

import Avatar from "@/components/Avatar/Avatar";
import { MateActions, MateDropDownMenu } from "./components";
import { MatePost } from "../../MateDetail.types";
import Divider from "@/components/Divider/Divider";

interface MateInfoProps {
  postId: string;
  mateData: MatePost;
}

const MateInfo = ({ mateData, postId }: MateInfoProps) => {
  const {
    authorThumbnailUrl,
    authorNickname,
    content,
    mateTime,
    mateLocation,
    recruitedUser,
    recruitingUser,
  } = mateData;

  return (
    <article className={`${GS.MateInformationContainer} py-4 flex flex-col gap-12`}>
      <div className="w-full flex items-center gap-6">
        <Avatar
          size="sm"
          src={authorThumbnailUrl}
        />
        <p className="grow text-medium font-medium whitespace-nowrap">{authorNickname}</p>
        {/* <MateDropDownMenu postId={postId} /> */}
        <MateDropDownMenu />
      </div>

      <p className="w-full text-medium font-medium leading-normal">{content}</p>

      <ul className={style.mate_info__list}>
        <li className={style.mate_info__item}>
          <p className={style.mate_info__item_title}>모임 장소</p>
          <p className={style.mate_info__item_text}>{mateLocation}</p>
        </li>

        <Divider isColumn />

        <li className={style.mate_info__item}>
          <p className={style.mate_info__item_title}>모임 시간</p>
          <p className={style.mate_info__item_text}>{mateTime}</p>
        </li>

        <Divider isColumn />

        <li className={style.mate_info__item}>
          <p className={style.mate_info__item_title}>모임 인원</p>
          <p className={style.mate_info__item_text}>{`${recruitingUser}/${recruitedUser}명`}</p>
        </li>
      </ul>

      <MateActions />
    </article>
  );
};

export default MateInfo;
