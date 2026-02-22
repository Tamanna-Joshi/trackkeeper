export function calculateStreak() {
  let streak = 0;
  let date = new Date();

  while (true) {
    const dateStr = date.toISOString().split("T")[0];
    const tasks = JSON.parse(localStorage.getItem(`tasks-${dateStr}`)) || [];

    const completed = tasks.filter(t => t.status === "Completed");

    if (completed.length > 0) {
      streak++;
      date.setDate(date.getDate() - 1);
    } else {
      break;
    }
  }

  const longest = parseInt(localStorage.getItem("longestStreak")) || 0;
  if (streak > longest) {
    localStorage.setItem("longestStreak", streak);
  }

  return streak;
}