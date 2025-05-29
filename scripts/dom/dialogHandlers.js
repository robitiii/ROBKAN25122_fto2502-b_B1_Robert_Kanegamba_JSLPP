import {
  dialogTitle,
  taskDialog,
  taskForm,
  taskSubmitBtn,
  taskDeleteBtn,
} from "./elements.js";

export function openDialog() {
  dialogTitle.textContent = "Add New Task";
  taskSubmitBtn.textContent = "Create Task";
  taskForm.reset();
  enableFormEditing();
  taskDialog.showModal();
  document
    .querySelectorAll(".form-group")
    .forEach((g) => g.classList.remove("error"));
  delete taskSubmitBtn.dataset.editingId;
  taskDeleteBtn.style.display = "none"; //Hide delete button on new task.
}
export function closeDialog() {
  taskDialog.close();
  taskForm.reset();
  document
    .querySelectorAll(".form-group")
    .forEach((g) => g.classList.remove("error"));
  delete taskSubmitBtn.dataset.editingId;
  taskDeleteBtn.style.display = "none"; //Hide delete button on close.
}
export function viewTaskDetails(task) {
  dialogTitle.textContent = "Edit Task";
  taskSubmitBtn.textContent = "Save Changes";
  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;
  taskSubmitBtn.dataset.editingId = task.id;
  enableFormEditing();
  taskDialog.showModal();
  taskDeleteBtn.style.display = "inline-block"; //Show delete button on edit
}

export function enableFormEditing() {
  Array.from(taskForm.elements).forEach((el) => {
    el.removeAttribute("readonly");
    el.removeAttribute("disabled");
  });
  taskForm.classList.remove("view-mode");
}
