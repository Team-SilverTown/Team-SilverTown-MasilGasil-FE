import * as GS from "../../MateDetail.styles";
import { UserEvaluationType } from "../../MateDetail.types";

interface MateEvaluationProps {
  authorEvaluation: UserEvaluationType;
}

const MateEvaluation = ({ authorEvaluation }: MateEvaluationProps) => {
  console.log(authorEvaluation);
  return (
    <article className={GS.MateInformationContainer}>
      <h6 className={GS.MateDetailInformationTitle}>재영 님이 받은 매너 평가</h6>
    </article>
  );
};

export default MateEvaluation;
