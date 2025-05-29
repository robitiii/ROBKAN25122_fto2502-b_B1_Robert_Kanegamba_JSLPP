import { columns } from "../dom/elements.js";
import { viewTaskDetails } from "../dom/dialogHandlers.js";

/**
 * Render all tasks into their respective columns
 * @param {Array} taskList
 */
export const renderTasks = (taskList) => {
  Object.values(columns).forEach((col) => (col.innerHTML = ""));

  taskList.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.className = "task-div";
    taskElement.dataset.taskId = task.id;
    taskElement.innerHTML = `<strong>${task.title}</strong>`;
    columns[task.status]?.appendChild(taskElement);
  });

  document.querySelectorAll(".task-div").forEach((taskDiv) => {
    taskDiv.addEventListener("click", () => {
      const taskId = parseInt(taskDiv.dataset.taskId);
      const task = taskList.find((t) => t.id === taskId);
      if (task) viewTaskDetails(task);
    });
  });
};
