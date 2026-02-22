export function getStartOfWeek() {
  const today = new Date();
  const day = today.getDay();

  const start = new Date(today);
  start.setDate(today.getDate() - day);
  start.setHours(0, 0, 0, 0);

  return start;
}

export function getWeekDates() {
  const start = getStartOfWeek();
  const week = [];

  for (let i = 0; i < 7; i++) {
    const current = new Date(start);
    current.setDate(start.getDate() + i);

    const dateStr = current.toLocaleDateString("en-CA");

    week.push({
      label: current.toLocaleDateString("en-US", {
        weekday: "short",
      }),
      date: dateStr,
    });
  }

  return week;
}