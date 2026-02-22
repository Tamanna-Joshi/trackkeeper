import { useState } from "react";

export default function AddTaskModal({ setShowModal, tasks, setTasks }) {

  const [form, setForm] = useState({
    name: "",
    time: "",
    priority: "Medium",
    notes: "",
    status: "Pending",
  });

  const handleSubmit = () => {
    if (!form.name.trim()) return;

    setTasks([...tasks, form]);
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white p-6 rounded shadow w-96">

        <h2 className="text-xl font-semibold mb-4">
          Add Task
        </h2>

        <input
          placeholder="Task Name"
          className="w-full border rounded px-2 py-1 mb-2"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="time"
          className="w-full border rounded px-2 py-1 mb-2"
          value={form.time}
          onChange={(e) =>
            setForm({ ...form, time: e.target.value })
          }
        />

        <select
          className="w-full border rounded px-2 py-1 mb-2"
          value={form.priority}
          onChange={(e) =>
            setForm({ ...form, priority: e.target.value })
          }
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          placeholder="Notes"
          className="w-full border rounded px-2 py-1 mb-4"
          value={form.notes}
          onChange={(e) =>
            setForm({ ...form, notes: e.target.value })
          }
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-1 bg-gray-300 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-1 bg-green-500 text-white rounded"
          >
            Add
          </button>
        </div>

      </div>
    </div>
  );
}