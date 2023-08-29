# Task Management App - README

![App Screenshot](screenshot.png)

Welcome to the Task Management App! This application is built using Node.js, React, and Redux to help you efficiently manage your tasks and stay organized. Whether you're a professional looking to track your work tasks or an individual managing personal to-dos, this app has got you covered.

## Table of Contents

- [Features](#features)
- [Project Links](#project-links)
- [Test Case](#test-case)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Task Creation:** Easily create new tasks with titles, descriptions, due dates, and priority levels.
- **Task List:** View and manage all your tasks in an organized list.
- **Task Delete:** View and manage and can delete your tasks in an organized list.
- **Task Update:** Edit task details and update their statuses like complete or incomplete.
- **Redux State Management:** Utilizes Redux for efficient state management and data flow.
- **Responsive UI:** A user-friendly and responsive user interface for both desktop and mobile users.

## Project Links

  ### Task Management App
  
  Welcome to the Task Management App! This project does...
  
  ### Links
  
  - [GitHub Repository](https://github.com/gitsforvikki/task-manag-final/tree/master)
  - [Live Demo](https://task-management-backend-e0d7.onrender.com/)

## Test Case

  ### Test Case: Creating a New Task

**Objective:** To verify that users can successfully create a new task in the React and Node.js task management app.

**Preconditions:**
- The task management app is installed and running on a local or test server.
- The user is logged in and has access to the task creation functionality.
- The user is on the main dashboard or task management page.

**Test Steps:**

1. Open the web browser and navigate to the task management app's URL.
2. Log in with valid credentials.
3. Once logged in, ensure that the user is directed to the main dashboard or task management page.
4. Locate and click on the "Create New Task" button/icon.
5. A new task creation form should appear with fields such as:
   - Task Name (input field)
   - Task Description (text area)
6. Fill in the task name, task description, select a due date, choose a priority level, and select an assignee (if applicable).
7. Click the "Create Task" or "Save" button to submit the task.
8. The system should process the request and display a success message or notification.
9. Verify that the newly created task is displayed on the main dashboard or task list with the provided information.
10. Verify that the task's details (name, description, due date, priority, assignee) match the information entered in the creation form.

**Expected Results:**

- The user should be able to successfully create a new task without encountering any errors.
- The success message or notification should confirm the task creation.
- The task should appear in the task list with accurate details.
- The task's details should match the information provided during task creation.

**Postconditions:**

The new task is now part of the user's task list and can be edited, updated, or deleted as needed.


## Test Case: Updating a Task

**Objective:** To verify that users can successfully update an existing task in the React and Node.js task management app.

**Preconditions:**
- The task management app is installed and running on a local or test server.
- The user is logged in and has access to the task update functionality.
- The user has at least one existing task in their task list.

**Test Steps:**

1. Open the web browser and navigate to the task management app's URL.
2. Log in with valid credentials.
3. Once logged in, ensure that the user is directed to the main dashboard or task management page.
4. Locate the task you want to update in the task list.
5. Click on the task to view its details or open the task edit mode.
6. Update the task details as needed:
   - Edit the Task Name (input field)
   - Modify the Task Description (text area)
7. Click the "Update Task" or "Save Changes" button to apply the updates.
8. The system should process the request and display a success message or notification.
9. Verify that the task details are updated in the task list with the new information.

**Expected Results:**

- The user should be able to successfully update an existing task without encountering any errors.
- The success message or notification should confirm the task update.
- The task's details in the task list should match the updated information.

**Postconditions:**

The task is updated with the new details and reflects the changes made by the user.


## Getting Started

To get started with the Task Management App on your local machine, follow these instructions.

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- Package Manager: [npm](https://www.npmjs.com/) (Comes with Node.js) or [Yarn](https://yarnpkg.com/) 

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-management-app.git

2. Navigate to the project directory:

    ```bash
    cd task-management-app

3. Install server dependencies:

    ```bash
    npm install

4. Navigate to the client directory:

    ```bash
    cd client

5. Install client dependencies:

    ```bash
    npm install

6. Go back to the main project directory:

    ```bash
    cd ..


## Usage

1. Start the development server:

    ```bash
    npm run dev


2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the app.

3. Create an account or log in if you have one.

4. Start managing your tasks by adding, editing, and marking them as complete!

## Technologies Used

- **Frontend:** React.js, Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **UI Styling:** CSS or any UI framework of your choice
- **State Management:** Redux
- **Routing:** React Router


## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Implement your feature or bug fix.
4. Commit and push your changes: `git commit -m "Description of your changes"` followed by `git push origin feature-name`.
5. Create a pull request explaining your changes.

## License

This project is licensed under the [MIT License](LICENSE).

