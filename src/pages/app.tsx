import { Dialog } from "../components/dialog";
import { CreateGoal } from "../components/create-goal";
import { EmptyGoals } from "../components/emptu-goals";
import { Summary } from "../components/summary";

export function Home() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <Summary />
      <CreateGoal />
    </Dialog>
  );
}
