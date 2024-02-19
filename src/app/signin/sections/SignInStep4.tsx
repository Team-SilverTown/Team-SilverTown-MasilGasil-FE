"use client";

import React, { useEffect } from "react";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";

import { Button } from "@/components";
import { Check } from "@/components/icons";
import useTheme from "@/lib/hooks/useTheme";

import { SignInFormProps } from "../SignIn.controller";
import useSignInModel from "../SignIn.model";
import * as GS from "@/styles/GlobalStyle";
import * as S from "../SignIn.styles";

interface SignInStep4Props {
  getValues: UseFormGetValues<SignInFormProps>;
  setValue: UseFormSetValue<SignInFormProps>;
}

const POLICY_CONTENT_LIST: Array<{
  content: string;
  // policyView: WINDOW_VIEWS;
  required: boolean;
  formKey: "policy1" | "policy2" | "policy3";
}> = [
  {
    content: "[필수] 개인정보 수집 및 이용 동의",
    required: true,
    formKey: "policy1",
  },
  { content: "[필수] 위치정보 수집 및 이용 동의", required: true, formKey: "policy2" },
  {
    content: "[필수] 만 14세 미만 가입 제한",
    required: true,
    formKey: "policy3",
  },
];

const SignInStep4 = ({ getValues, setValue }: SignInStep4Props) => {
  const theme = useTheme();

  const { checkAllPolicy, setCheckAllPolicy, policyCheck, setPolicyCheck } = useSignInModel();

  useEffect(() => {
    const initState = new Array(POLICY_CONTENT_LIST.length).fill(false);
    setPolicyCheck(initState);
  }, []);

  useEffect(() => {
    if (policyCheck.every((isTrue) => isTrue)) {
      setCheckAllPolicy(true);
    } else {
      setCheckAllPolicy(false);
    }
  }, [policyCheck]);

  const togglePolicyAccept = (index: number) => {
    const newState = policyCheck.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return !c;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setPolicyCheck(newState);
    const prevValue = getValues(POLICY_CONTENT_LIST[index].formKey);
    setValue(POLICY_CONTENT_LIST[index].formKey, !prevValue);
  };

  const toggleAllPolicy = () => {
    if (checkAllPolicy) {
      const newState = new Array(POLICY_CONTENT_LIST.length).fill(false);
      setPolicyCheck(newState);
      POLICY_CONTENT_LIST.forEach(({ formKey }) => setValue(formKey, false));
    } else {
      const newState = new Array(POLICY_CONTENT_LIST.length).fill(true);
      setPolicyCheck(newState);
      POLICY_CONTENT_LIST.forEach(({ formKey }) => setValue(formKey, true));
    }
  };

  return (
    <div className="h-full">
      <GS.Row className="flex flex-row items-center mb-12">
        <Button
          id="checkAll"
          variant="neumorp"
          onClickHandler={() => {
            setCheckAllPolicy((prev) => !prev);
            toggleAllPolicy();
          }}
          style={{
            width: "3rem",
            height: "3rem",
            padding: 0,
            backgroundColor: checkAllPolicy ? theme?.green_500 : theme?.transparent_10,
            borderRadius: 999,
          }}
        >
          <Check
            className={`w-6 h-6 mx-auto my-auto transition-colors`}
            stroke={checkAllPolicy ? theme?.white_100 : theme?.gray_300}
            strokeWidth={3.5}
          />
        </Button>
        <S.PolicyLable htmlFor="checkAll">
          <S.PolicyH2>모든 약관 동의하기</S.PolicyH2>
        </S.PolicyLable>
      </GS.Row>
      <GS.Col className="flex flex-col mt-4 mb-5 ml-[3px]">
        <ul className="space-y-8">
          {POLICY_CONTENT_LIST.map((policy, index) => (
            <li key={index}>
              <GS.Row className="space-x-4 text-sm">
                {/* Accept Polciy */}
                <button onClick={() => togglePolicyAccept(index)}>
                  <GS.Row className="space-x-4">
                    <Check
                      className={`w-6 h-6 mx-auto my-auto transition-colors`}
                      stroke={policyCheck[index] ? theme?.green_500 : theme?.gray_200}
                      strokeWidth={3.5}
                    />
                    <S.PolicyText>{policy.content}</S.PolicyText>
                  </GS.Row>
                </button>
                {/* Show Policy */}
                <button
                  onClick={() => {
                    // handleShowPolicy(policy.policy);
                  }}
                >
                  <S.PolicySeeMoreText
                    style={{
                      color: theme?.gray_300,
                      textDecorationLine: "underline",
                      textUnderlineOffset: 3,
                    }}
                  >
                    자세히
                  </S.PolicySeeMoreText>
                </button>
              </GS.Row>
            </li>
          ))}
        </ul>
      </GS.Col>
    </div>
  );
};

export default SignInStep4;
