# 🏋️ My Workout

<p align="center">
  <a href="https://jimmykiedis.github.io/fit/">
    <img src="https://img.shields.io/badge/💪%20Live%20Demo-4bffff?style=for-the-badge" alt="Live Demo">
  </a>
  <br>
  <em>Click the image to access the live demo.</em>
</p>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat&logo=javascript&logoColor=000000)
![Status](https://img.shields.io/badge/status-in%20development-267f72)

**My Workout** is a simple web application for tracking workout plans and aerobic activities.

Choose between workout plans, navigate through training days, and record weights and completed exercises.

Your progress is saved in your browser's local storage, with no account required.

The interface is designed to work on both desktop and mobile devices.

## 🎯 Objective

Provide a practical way to view workout plans and track progress during each training session, directly in the browser.

## ✨ Features

- Two workout plans available: body recomposition and beginner training.
- Navigation between Monday, Wednesday, and Friday workouts.
- Exercise lists with sets, repetitions, and instructions when available.
- Weight tracking in kilograms and exercise completion checkboxes.
- Visual progress tracking for each workout session.
- Calorie tracking for aerobic activities included in workout plans.
- Clear completed workout progress for the selected day with confirmation.
- Local storage of workout records and current selection using `localStorage`.
- Responsive layout and accessible controls.

## 🛠 How to Use the Repository

### Download and Open in VS Code

1. Install [Git](https://git-scm.com/) and [Visual Studio Code](https://code.visualstudio.com/) if you haven't already.

2. Clone the repository using the terminal:

   ```bash
   git clone https://github.com/jimmykiedis/fit.git
   ```

3. Open the project folder in VS Code:

   ```bash
   cd fit
   code .
   ```

   If the `code` command is unavailable, use **File → Open Folder...** in VS Code and select the `fit` folder.

### Edit and Run

- Edit `index.html` to modify the page structure.
- Edit `style.css` to change colors, spacing, and layout.
- Edit `script.js` to customize workout plans, exercises, and application behavior.
- To run the application, open `index.html` in your browser. You can also install the **Live Server** extension in VS Code, right-click `index.html`, and select **Open with Live Server** to automatically reload the page whenever you save changes.

The project is static and requires no dependency installation, application server, or build process.

## 🏗️ Implementation Strategy

The application separates content, presentation, and behavior into three files.

Workout plans are defined as JavaScript data structures. The interface is dynamically rendered using this data and updated whenever the user selects a plan, switches training days, or records activities.

Weights, calories, completed exercises, and navigation preferences are stored locally in the browser.

There is no backend or synchronization between devices.

## 🛠️ Technologies

- **HTML5** — semantic page structure.
- **CSS3** — visual identity, components, and responsive layouts.
- **JavaScript (ES6+)** — workout data, interactions, and local persistence through `localStorage`.
- **Visual Studio Code** — recommended code editor.
- **Live Server (optional)** — local server for previewing changes during development.

## 💡 Suggested Structure

```text
fit/
├── index.html   # Application structure
├── style.css    # Styles and responsive layout
├── script.js    # Workout plans, interactions, and local storage
└── README.md    # Project documentation
```

## ❤️ Special Tip

Your records are stored in the browser on the device where they were created.

Clearing browser data or switching devices may result in data loss. Keep a separate backup if you need to preserve your records.

## 📄 License

No license has been defined for this repository yet. Please contact the project owner before reusing or distributing the code.