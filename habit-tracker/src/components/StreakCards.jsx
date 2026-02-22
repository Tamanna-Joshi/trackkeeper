import { useEffect, useState } from "react";
import { calculateStreak } from "../utils/streak";

export default function StreakCards() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    setStreak(calculateStreak());
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">

      <div className="bg-orange-100 p-4 rounded shadow">
        <h3 className="text-sm text-gray-500">Current Streak</h3>
        <p className="text-3xl font-bold text-orange-500">{streak}</p>
      </div>

      <div className="bg-blue-100 p-4 rounded shadow">
        <h3 className="text-sm text-gray-500">Longest Streak</h3>
        <p className="text-3xl font-bold text-blue-500">
          {localStorage.getItem("longestStreak") || 0}
        </p>
      </div>

      <div className="bg-green-100 p-4 rounded shadow">
        <h3 className="text-sm text-gray-500">Last Active</h3>
        <p className="text-lg font-semibold">
          {streak > 0 ? "Today" : "No recent activity"}
        </p>
      </div>

    </div>
  );
}