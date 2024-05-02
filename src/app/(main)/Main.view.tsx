import style from "./Main.module.css";

import AuthButton from "./components/AuthButton";

const MainView = () => {
  return (
    <div className="relative w-full h-full">
      <div
        className={`${style.fade} absolute top-[20%] -right-[35%] w-[90%] aspect-square bg-green-300 opacity-0`}
        style={{ borderRadius: "55% 45% 55% 45% / 60% 49% 51% 40%", animationDelay: "100ms" }}
      />
      <div
        className={`${style.fade} absolute top-[20%] -left-[5%] w-[65%] bg-green-500 opacity-0`}
        style={{
          borderRadius: "75% 25% 70% 30% / 54% 33% 67% 46%",
          aspectRatio: "1.2/1",
          animationDelay: "600ms",
        }}
      />
      <div
        className={`${style.fade} absolute top-[45%] left-[5%] w-1/2 aspect-square bg-yellow-500 opacity-0`}
        style={{
          borderRadius: "62% 38% 55% 45% / 52% 53% 47% 48%",
          animationDelay: "1100ms",
        }}
      />
      <div className="absolute bottom-[40%] left-1/2 -translate-x-1/2">
        <h1 className={`${style.showup} opacity-0 font-bold text-[--font-size-h1] text-white`}>
          마실가실
        </h1>
      </div>
      <AuthButton />
    </div>
  );
};

export default MainView;
