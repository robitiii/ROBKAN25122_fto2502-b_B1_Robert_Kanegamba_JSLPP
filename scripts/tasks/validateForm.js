export const validateField = (field) => {
  const formGroup = field.closest(".form-group");
  const isValid = field.value.trim() !== "";
  formGroup.classList.toggle("error", !isValid);
  return isValid;
};

export const validateForm = (form) => {
  return (
    validateField(form.elements.title) &&
    validateField(form.elements.description)
  );
};
