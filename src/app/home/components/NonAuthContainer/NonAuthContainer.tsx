import VariableMessage from "../StatisticContainer/components/VariableMessage/VariableMessage";
import SignInButton from "./components/SignInButton/SignInButton";

const NonAuthContainer = () => {
  return (
    <section className="inset-1 flex flex-col gap-[2rem] rounded-[3rem] bg-[#A4D24D] px-12 py-10 shadow-[inset_0px_0px_0px_4px_rgba(255,255,255,0.1)]">
      <header className="text-3xl">
        <p className="text-white">마실가실에 잘 오셨어요!</p>
        <VariableMessage />
      </header>
      <SignInButton />
    </section>
  );
};

export default NonAuthContainer;
