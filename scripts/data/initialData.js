// Exported Local Storage Key
export const STORAGE_KEY = "module_data-keys";

// Function to fetch initial tasks from the API
export const fetchInitialTasks = async () => {
  try {
    const response = await fetch("https://jsl-kanban-api.vercel.app/");
    const data = await response.json();

    // Optional: Clean or reformat if needed (e.g., strip ID or map fields)
    return data.map((task) => ({
      id: task.id, // Keep ID if you want to use it
      title: task.title,
      description: task.description || "", // fallback if missing
      status: task.status,
    }));
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    return []; // Return empty array on failure
  }
};

// Function to save tasks to local storage
export const saveTasks = (tasklist) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasklist));
};
