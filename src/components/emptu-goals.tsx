import logo from "../assets/logo-in-orbit.svg";
import { Button } from "../components/button";
import main from "../assets/home-ilustration.svg";
import { DialogTrigger } from "../components/dialog";
import { Plus } from "lucide-react";

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img className="" src={main} alt="" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal{" "}
        <span className="underline">cadastrar uma</span> agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
