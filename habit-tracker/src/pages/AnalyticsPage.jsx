import StreakCards from "../components/StreakCards";
import WeeklyProgress from "../components/WeeklyProgress";

export default function AnalyticsPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Weekly Performance
      </h2>

      <StreakCards />

      <WeeklyProgress />
    </div>
  );
}