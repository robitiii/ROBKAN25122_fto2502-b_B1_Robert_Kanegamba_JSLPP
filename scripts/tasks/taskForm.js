import { taskForm, taskSubmitBtn } from "../dom/elements.js";
import { saveTasks } from "../data/initialData.js";
import { renderTasks } from "./renderTasks.js";
import { closeDialog } from "../dom/dialogHandlers.js";

/**
 * Handle form submission for adding/editing tasks
 * @param {Event} event
 * @param {Array} taskList
 * @param {Function} setTaskList - callback to update taskList in main.js
 */
export const handleTaskSubmit = (event, taskList, setTaskList) => {
  event.preventDefault();
  const formData = new FormData(taskForm);
  const editingId = taskSubmitBtn.dataset.editingId;

  if (editingId) {
    const task = taskList.find((t) => t.id == editingId);
    if (task) {
      task.title = formData.get("title");
      task.description = formData.get("description");
      task.status = formData.get("status");
    }
    delete taskSubmitBtn.dataset.editingId;
  } else {
    const newTask = {
      id: Date.now(),
      title: formData.get("title"),
      description: formData.get("description"),
      status: formData.get("status"),
    };
    taskList.push(newTask);
  }

  saveTasks(taskList);
  renderTasks(taskList);
  closeDialog();
  taskForm.reset();
  setTaskList(taskList);
};
/**
 * Handle deleting a task
 * @param {Array} taskList
 * @param {Function} setTaskList
 */
export const handleTaskDelete = (taskList, setTaskList) => {
  const editingId = taskSubmitBtn.dataset.editingId;
  if (!editingId) return;

  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (!confirmDelete) return;

  const updatedList = taskList.filter((task) => task.id != editingId);
  saveTasks(updatedList);
  renderTasks(updatedList);
  closeDialog();
  taskForm.reset();
  setTaskList(updatedList);
};
