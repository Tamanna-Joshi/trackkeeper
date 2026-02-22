import { useEffect, useState } from "react";
import TaskTable from "../components/TaskTable";
import AddTaskModal from "../components/AddTaskModal";

export default function DailyPage() {
 const today = new Date().toLocaleDateString("en-CA");
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Load today's tasks or generate from template
 useEffect(() => {
  fetch(`http://localhost:5000/api/tasks/${today}`)
    .then(res => res.json())
    .then(data => setTasks(data));
}, [today]);

  // Save tasks daily
  useEffect(() => {
  if (tasks.length >= 0) {
    const withDate = tasks.map(t => ({
      ...t,
      date: today
    }));

    fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(withDate)
    });
  }
}, [tasks]);

  // Save Template
  const saveTemplate = () => {
    const cleaned = tasks.map(
      ({ name, time, priority, notes }) => ({
        name,
        time,
        priority,
        notes,
      })
    );

    localStorage.setItem("templates", JSON.stringify(cleaned));
    alert("Template Saved!");
  };

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">
          Daily Tasks ({today})
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            + Add Task
          </button>

          <button
            onClick={saveTemplate}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save as Template
          </button>
        </div>
      </div>

      <TaskTable tasks={tasks} setTasks={setTasks} />

      {showModal && (
        <AddTaskModal
          setShowModal={setShowModal}
          tasks={tasks}
          setTasks={setTasks}
        />
      )}
    </div>
  );
}