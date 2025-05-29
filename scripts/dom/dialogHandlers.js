import {
  dialogTitle,
  taskDialog,
  taskForm,
  taskSubmitBtn,
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
}
export function closeDialog() {
  taskDialog.close();
  taskForm.reset();
  document
    .querySelectorAll(".form-group")
    .forEach((g) => g.classList.remove("error"));
  delete taskSubmitBtn.dataset.editingId;
}
