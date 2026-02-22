export function getTasks(date) {
  return JSON.parse(localStorage.getItem(`tasks-${date}`)) || [];
}

export function saveTasks(date, tasks) {
  localStorage.setItem(`tasks-${date}`, JSON.stringify(tasks));
}

export function getTemplates() {
  return JSON.parse(localStorage.getItem("taskTemplates")) || [];
}

export function saveTemplates(templates) {
  localStorage.setItem("taskTemplates", JSON.stringify(templates));
}