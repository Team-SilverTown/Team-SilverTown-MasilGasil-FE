const getGreetingMessage = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 6 && currentHour < 12) {
    return "상쾌한 오전, 한 바퀴 산책 어떠신가요?";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "나른한 오후, 마실 한 바퀴 어떠신가요?";
  } else if (currentHour >= 18 && currentHour < 24) {
    return "여유로운 저녁, 한 바퀴 돌아볼까요?";
  } else {
    return "조용한 심야, 별빛 아래 산책 어떠신가요?";
  }
};

const VariableMessage = () => {
  return <p className="text-white">{getGreetingMessage()}</p>;
};

export default VariableMessage;
