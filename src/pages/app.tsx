import logo from "../assets/logo-in-orbit.svg";
import main from "../assets/home-ilustration.svg";
import { FaPlus } from "react-icons/fa6";

export function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img className="" src={main} alt="" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal{" "}
        <span className="underline">cadastrar uma</span> agora mesmo?
      </p>

      <button
        type="button"
        className="flex justify-center items-center text-violet-50 bg-violet-500 py-2.5 px-4 rounded-lg gap-2 text-sm font-medium hover:bg-violet-600"
      >
        <FaPlus className="size-4" />
        Cadastrar meta
      </button>
    </div>
  );
}
