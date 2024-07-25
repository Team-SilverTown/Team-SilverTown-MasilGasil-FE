import style from "./Main.module.css";

import LogoL from "@/components/icons/LogoL";

import AuthButton from "./components/AuthButton";

const MainView = () => {
  return (
    <div className="relative h-full w-full">
      <div
        className={`${style.fade} absolute -right-[35%] top-[20%] aspect-square w-[90%] bg-green-300 opacity-0`}
        style={{ borderRadius: "55% 45% 55% 45% / 60% 49% 51% 40%", animationDelay: "100ms" }}
      />
      <div
        className={`${style.fade} absolute -left-[5%] top-[18%] w-[65%] bg-green-500 opacity-0`}
        style={{
          borderRadius: "75% 25% 70% 30% / 54% 33% 67% 46%",
          aspectRatio: "1.2/1",
          animationDelay: "600ms",
        }}
      />
      <div
        className={`${style.fade} absolute left-[-5%] top-[45%] aspect-square w-2/3 bg-yellow-500 opacity-0`}
        style={{
          borderRadius: "62% 38% 55% 45% / 52% 53% 47% 48%",
          animationDelay: "1100ms",
        }}
      />
      <div className="absolute left-1/2 top-[13%] z-30 -translate-x-1/2">
        <h1 className={`float animate-bounce font-bold text-[--font-size-h1] text-white`}>
          <LogoL />
        </h1>
      </div>
      <AuthButton />
    </div>
  );
};

export default MainView;
