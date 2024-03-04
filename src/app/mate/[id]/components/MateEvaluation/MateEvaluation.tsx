import * as GS from "../../MateDetail.styles";
import * as S from "./MateEvaluation.styles";
import { UserEvaluationType } from "../../MateDetail.types";

interface MateEvaluationProps {
  authorEvaluation: UserEvaluationType;
  nickName: string;
}

const evaluationList: {
  type: "kind" | "time" | "bad";
  text: string;
}[] = [
  { type: "kind", text: "친절해요 😊" },
  { type: "time", text: "시간약속을 잘지켜요! 👍" },
  { type: "bad", text: "부담스러워요 .. 🥹" },
];

const MateEvaluation = ({ authorEvaluation, nickName }: MateEvaluationProps) => {
  return (
    <article className={GS.MateInformationContainer}>
      <h6 className={GS.MateDetailInformationTitle}>{`${nickName}님이 받은 매너 평가`}</h6>

      <ul className="w-full py-6 flex flex-col gap-6 overflow-x-scroll scrollbar-hide">
        {evaluationList.map(({ text, type }) => (
          <li
            className={S.EvaluationItem}
            key={type}
          >
            <p className={S.EvaluationTitle}>{text}</p>
            <p className={S.EvaluationText}>
              {authorEvaluation[type]}
              <span className={S.EvaluationUnit}>명</span>
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default MateEvaluation;
