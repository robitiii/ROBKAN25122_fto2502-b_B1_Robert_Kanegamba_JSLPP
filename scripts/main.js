// js/main.js
import { loadTasks, saveTasks } from "./data/initialData.js";
to;
import {
  addTaskBtn,
  closeDialogBtn,
  taskForm,
  taskSubmitBtn,
  taskDialog,
  taskDeleteBtn,
} from "./dom/elements.js";
import { openDialog, closeDialog } from "./dom/dialogHandlers.js";
import { validateForm, validateField } from "./tasks/validateForm.js";
import { renderTasks } from "./tasks/renderTasks.js";
import { handleTaskSubmit } from "./tasks/taskForm.js";

// Query the collapse button and sidebar elements
const showSidbarBtn = document.getElementById("show-side-btn");
const collapseSidebarBtn = document.getElementById("collapse-sidebar-btn");
const sidebar = document.getElementById("side-bar-div");
const layout = document.getElementById("layout");

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
  //Delete logic
  taskDeleteBtn.addEventListener("click", () => {
    const taskIdToDelete = taskSubmitBtn.dataset.editingId;
    if (!taskIdToDelete) return;

    const confirmed = confirm("Are you sure you want to delete this task?");
    if (!confirmed) return;

    const updatedTasks = taskList.filter(
      (task) => task.id !== Number(taskIdToDelete) //filter comparison from dataset to numeric
    );
    setTaskList(updatedTasks);
    saveTasks(updatedTasks);
    renderTasks(updatedTasks);
    closeDialog();
  });

  if (collapseSidebarBtn) {
    collapseSidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("hidden-sidebar");
      layout.classList.toggle("full-width-layout");
    });
  }

  const showSidebarBtn = document.getElementById("show-sidebar-btn");

  collapseSidebarBtn.addEventListener("click", () => {
    sidebar.classList.add("hidden-sidebar");
    layout.classList.add("full-width-layout");
    showSidebarBtn.classList.add("visible");
  });

  showSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("hidden-sidebar");
    layout.classList.remove("full-width-layout");
    showSidebarBtn.classList.remove("visible");
  });
};

document.addEventListener("DOMContentLoaded", initApp);
