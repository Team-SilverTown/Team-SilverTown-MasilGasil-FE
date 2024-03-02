import * as GS from "../../MateDetail.styles";

import Avatar from "@/components/Avatar/Avatar";
import { MateToggleMenu } from "./components";
import { MatePost } from "../../MateDetail.types";

interface MateInfoProps {
  postId: string;
  mateData: MatePost;
}

const MateInfo = ({ mateData, postId }: MateInfoProps) => {
  const { authorThumbnailUrl, authorNickname } = mateData;

  return (
    <article className={GS.MateInformationContainer}>
      <div className="w-full flex items-center gap-6">
        <Avatar
          size="sm"
          src={authorThumbnailUrl}
        />
        <p className="grow text-medium font-medium whitespace-nowrap">{authorNickname}</p>
        <MateToggleMenu postId={postId} />
      </div>
    </article>
  );
};

export default MateInfo;
