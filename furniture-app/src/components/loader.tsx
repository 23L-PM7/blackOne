import { quicksand } from "@/app/theme";

export function Loader() {
  return (
    <div className="h-screen w-screen bg-[#EDECE9] flex flex-col justify-center items-center">
      <iframe
        src="https://giphy.com/embed/nMy8HTFQRWpudNwbxQ"
        className="w-[200px] h-[200px] border-none"
        allowFullScreen
      ></iframe>
      <h1 className={quicksand.className}>Loading...</h1>
    </div>
  );
}
