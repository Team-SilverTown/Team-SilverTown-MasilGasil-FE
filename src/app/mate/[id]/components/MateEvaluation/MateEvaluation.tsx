import * as GS from "../../MateDetail.styles";
import * as S from "./MateEvaluation.styles";
import { UserEvaluationType } from "../../MateDetail.types";

interface MateEvaluationProps {
  authorEvaluation: UserEvaluationType;
  nickName: string;
}

const MateEvaluation = ({ authorEvaluation, nickName }: MateEvaluationProps) => {
  const { kind, time, bad } = authorEvaluation;
  return (
    <article className={GS.MateInformationContainer}>
      <h6 className={GS.MateDetailInformationTitle}>{`${nickName}님이 받은 매너 평가`}</h6>

      <ul className="w-full py-6 flex flex-col gap-6">
        <li className={S.EvaluationItem}>
          <p className={S.EvaluationTitle}>친절해요 😊</p>
          <p className={S.EvaluationText}>
            {kind}
            <span className={S.EvaluationUnit}>명</span>
          </p>
        </li>
        <li className={S.EvaluationItem}>
          <p className={S.EvaluationTitle}>시간약속을 잘지켜요! 👍</p>
          <p className={S.EvaluationText}>
            {time}
            <span className={S.EvaluationUnit}>명</span>
          </p>
        </li>
        <li className={S.EvaluationItem}>
          <p className={S.EvaluationTitle}>부담스러워요 .. 🥹</p>
          <p className={S.EvaluationText}>
            {bad}
            <span className={S.EvaluationUnit}>명</span>
          </p>
        </li>
      </ul>
    </article>
  );
};

export default MateEvaluation;
