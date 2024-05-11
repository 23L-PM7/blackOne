import { quicksand } from "@/app/theme";

export function SasukeLoader() {
  return (
    <div className="h-screen w-screen bg-[#EDECE9] flex flex-col justify-center items-center">
      <iframe
        src="https://giphy.com/embed/3fNmJ20ErpkjK"
        className="w-[480px] h-[271px]"
        allowFullScreen
      ></iframe>
      <h1 className={quicksand.className}>Loading...</h1>
    </div>
  );
}
