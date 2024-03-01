import * as GS from "../../MateDetail.styles";
import { MateMemberType } from "../../MateDetail.types";

interface MateMembersProps {
  members: MateMemberType[];
}

const MateMembers = ({ members }: MateMembersProps) => {
  console.log(members);

  return (
    <article className={GS.MateInformationContainer}>
      <h5 className={GS.MateDetailInformationTitle}>참가자</h5>
    </article>
  );
};

export default MateMembers;
