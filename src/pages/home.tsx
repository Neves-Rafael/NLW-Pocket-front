import { Dialog } from "../components/dialog";
import { CreateGoal } from "../components/create-goal";
import { EmptyGoals } from "../components/empty-goals";
import { Summary } from "../components/summary";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "../http/get-summary";

export function Home() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  });

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  );
}
