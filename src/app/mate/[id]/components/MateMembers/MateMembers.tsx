import * as GS from "../../MateDetail.styles";

import { MateMemberType } from "../../MateDetail.types";
import Avatar from "@/components/Avatar/Avatar";

interface MateMembersProps {
  members: MateMemberType[];
}

const MateMembers = ({ members }: MateMembersProps) => {
  return (
    <article className={GS.MateInformationContainer}>
      <h5 className={GS.MateDetailInformationTitle}>참가자</h5>

      <ul className="w-full flex flex-col gap-6 py-6">
        {members.map(({ thumbnailUrl, nickname, user_id }) => (
          <li
            key={user_id}
            className="w-full flex items-center gap-4"
          >
            <Avatar
              src={thumbnailUrl}
              userId={user_id}
            />
            <p className="grow text-basic font-medium whitespace-nowrap">{nickname}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default MateMembers;