export async function createGoalCompletion(goalId: string) {
  const response = await fetch("http://localhost:3333/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      goalId,
    }),
  });

  if (!response.ok) {
    throw new Error("Error while creating the goal completion");
  }
}
