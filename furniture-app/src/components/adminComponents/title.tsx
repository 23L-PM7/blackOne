import { quicksand } from "@/app/theme";

export function Title() {
  return (
    <div className="flex flex-col items-center">
      <h2 className={`${quicksand.className} text-xl`}>Admin</h2>
      <h1 className="text-lg">Dashboard</h1>
    </div>
  );
}
