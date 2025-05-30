# 🗂️ Kanban Task Manager App

A modern, responsive Kanban board built with vanilla JavaScript, HTML, and CSS. This application allows users to manage tasks across three categories: To Do, Doing, and Done. It supports task creation, editing, deletion, dynamic API fetching, theme toggling, and is optimized for both desktop and mobile use.

## 🚀 Features

### ✅ Task Management
- Create tasks with title, description, and status.
- Edit task details via a modal interface.
- Delete tasks with confirmation prompts.
- Tasks are dynamically loaded from an external API:
  - **API URL**: [https://jsl-kanban-api.vercel.app/](https://jsl-kanban-api.vercel.app/)
- All tasks are persisted to `localStorage` for data retention across sessions.

### 🌐 Deployment
- Deployed on **Vercel** for fast and global access.
- All features are tested in the live environment:
  - Task creation, editing, deletion
  - Local storage
  - Theme toggling
  - Mobile responsiveness

### 🔄 API Integration
- Replaces hardcoded task data with live API data.
- Shows **loading** message while fetching.
- Displays **error message** if API fetch fails.

### 💾 Local Storage
- Tasks saved in `localStorage` for persistent state across reloads.
- Tasks loaded and displayed in correct columns on startup.

### 📝 Task Editing & Deletion
- Edit title, description, and status via modal.
- Delete tasks with confirmation popup.
- Changes sync instantly with local storage and UI.

### 📚 Sidebar
- Toggleable sidebar matches the Figma layout.
- Desktop sidebar is always visible; mobile sidebar accessed via app logo.

### 📱 Mobile Menu
- Mobile sidebar behaves as a top-access menu.
- Includes theme toggle and all sidebar features.
- Can be opened and dismissed easily.

### 🌗 Theme Toggle
- Light/Dark mode toggle included.
- Works on both desktop and mobile versions.
- User preference is saved and applied on next visit.

---

## 🔗 Project Links

- 🔍 **Code Overview & Explanation**: [adding soon](#)
- 🌐 **Live Deployed App (Vercel)**: [vercel app ](https://robkan-25122-fto2502-b-b1-robert-ka.vercel.app/)

---

