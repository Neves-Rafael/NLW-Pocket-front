import { Plus } from "lucide-react";
import { OutlineButton } from "./outline-button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPendingGoals } from "../http/get-pending-goals";
import { createGoalCompletion } from "../http/create-goal-completion";

export function PendingGoals() {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["pending-goals"],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60, // 60 seconds
  });

  if (!data) {
    return null;
  }

  async function handleCompleteGoal(goalId: string) {
    createGoalCompletion(goalId);
    queryClient.invalidateQueries({
      queryKey: ["summary"],
    });
    queryClient.invalidateQueries({
      queryKey: ["pending-goals"],
    });
  }

  return (
    <div className="flex gap-3 flex-wrap">
      {data.map((goal) => {
        return (
          <OutlineButton
            onClick={() => handleCompleteGoal(goal.id)}
            key={goal.id}
            disabled={goal.completionCounts >= goal.desiredWeeklyFrequency}
          >
            <Plus className="size-4 text-zinc-600" />
            {goal.title}
          </OutlineButton>
        );
      })}
    </div>
  );
}
