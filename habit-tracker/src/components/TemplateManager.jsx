import { saveTemplates } from "../utils/storage";

export default function TemplateManager({ tasks }) {
  const saveAsTemplate = () => {
    const cleaned = tasks.map(({ name, priority, category, notes }) => ({
      name,
      priority,
      category,
      notes,
    }));

    saveTemplates(cleaned);
    alert("Template saved!");
  };

  return (
    <div className="mt-4">
      <button
        onClick={saveAsTemplate}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Current Tasks as Template
      </button>
    </div>
  );
}