// js/main.js
import { loadTasks } from "./data/initialData.js";
import {
  addTaskBtn,
  closeDialogBtn,
  taskForm,
  taskSubmitBtn,
  taskDialog,
} from "./dom/elements.js";
import { openDialog, closeDialog } from "./dom/dialogHandlers.js";
import { validateForm, validateField } from "./tasks/validateForm.js";
import { renderTasks } from "./tasks/renderTasks.js";
import { handleTaskSubmit } from "./tasks/taskForm.js";

let taskList = [];

const setTaskList = (newList) => {
  taskList = [...newList];
};

const initApp = async () => {
  taskList = await loadTasks();
  renderTasks(taskList);

  addTaskBtn.addEventListener("click", openDialog);
  closeDialogBtn.addEventListener("click", closeDialog);

  taskForm.addEventListener("submit", (event) => {
    if (!validateForm(taskForm)) {
      event.preventDefault();
      return;
    }
    handleTaskSubmit(event, taskList, setTaskList);
  });

  document
    .getElementById("task-title")
    .addEventListener("blur", (e) => validateField(e.target));
  document
    .getElementById("task-desc")
    .addEventListener("blur", (e) => validateField(e.target));

  taskDialog.addEventListener("click", (e) => {
    const rect = taskDialog.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      closeDialog();
    }
  });
};

document.addEventListener("DOMContentLoaded", initApp);
