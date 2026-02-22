export default function TaskTable({ tasks, setTasks }) {

  const updateTask = (index, field, value) => {
    const updated = [...tasks];
    updated[index][field] = value;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  // Sort by time
  const sortedTasks = [...tasks].sort((a, b) => {
    if (!a.time) return 1;
    if (!b.time) return -1;
    return a.time.localeCompare(b.time);
  });

  return (
    <table className="w-full bg-white shadow rounded overflow-hidden">

      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="p-3">Task</th>
          <th>Time</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Notes</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {sortedTasks.map((task, index) => (
          <tr key={index} className="border-t">

            {/* Task Name */}
            <td className="p-3">
              <input
                value={task.name}
                onChange={(e) =>
                  updateTask(index, "name", e.target.value)
                }
                className="w-full border rounded px-2 py-1"
              />
            </td>

            {/* Time */}
            <td>
              <input
                type="time"
                value={task.time || ""}
                onChange={(e) =>
                  updateTask(index, "time", e.target.value)
                }
                className="border rounded px-2 py-1"
              />
            </td>

            {/* Status */}
            <td>
              <select
                value={task.status}
                onChange={(e) =>
                  updateTask(index, "status", e.target.value)
                }
                className="border rounded px-2 py-1"
              >
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </td>

            {/* Priority */}
            <td>
              <select
                value={task.priority}
                onChange={(e) =>
                  updateTask(index, "priority", e.target.value)
                }
                className="border rounded px-2 py-1"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </td>

            {/* Notes */}
            <td>
              <input
                value={task.notes}
                onChange={(e) =>
                  updateTask(index, "notes", e.target.value)
                }
                className="border rounded px-2 py-1"
              />
            </td>

            {/* Delete */}
            <td>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500"
              >
                🗑
              </button>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}