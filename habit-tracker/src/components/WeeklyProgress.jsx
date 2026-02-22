import { useEffect, useState } from "react";
import { getWeekDates } from "../utils/weekly";

export default function WeeklyProgress() {
  const [weekData, setWeekData] = useState([]);

  useEffect(() => {
    const fetchWeek = async () => {
      const week = getWeekDates();
      const updated = [];

      for (let day of week) {
        const res = await fetch(
          `http://localhost:5000/api/tasks/${day.date}`
        );
        const tasks = await res.json();

        const completed = tasks.filter(
          (t) => t.status === "Completed"
        ).length;

        const total = tasks.length;

        updated.push({
          ...day,
          completed,
          total,
          percent:
            total === 0
              ? 0
              : Math.round((completed / total) * 100),
        });
      }

      setWeekData(updated);
    };

    fetchWeek();
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h3 className="text-lg font-semibold mb-4">
        Weekly Progress
      </h3>

      <div className="space-y-4">
        {weekData.map((day, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span>
                {day.label} ({day.date})
              </span>
              <span>
                {day.completed}/{day.total} ({day.percent}%)
              </span>
            </div>

            <div className="w-full bg-gray-200 h-3 rounded">
              <div
                className="bg-green-500 h-3 rounded"
                style={{ width: `${day.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}