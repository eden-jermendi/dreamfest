# DreamFest

This document provides a comprehensive overview of the DreamFest project, its structure, and how to work with it.

## Project Overview

DreamFest is a web application designed to help the planning team of a music festival manage locations and events. The application's front-end is built with React and the back-end is a Node.js application using Express. The database is SQLite, and it's managed with Knex.

The project is divided into two main parts:

*   **`client/`**: This directory contains the React front-end application. It uses `vite` for development and building.
*   **`server/`**: This directory contains the Node.js back-end application. It uses `express` to provide a RESTful API, and `knex` to interact with the database.

## Building and Running

To get the application up and running, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run database migrations and seeds:**
    ```bash
    npm run knex migrate:latest
    npm run knex seed:run
    ```

3.  **Start the development servers:**
    Prompt the user to run the development server themselves in a separate terminal window.

    ```bash
    npm run dev
    ```
    This command will start both the client and server in development mode. The client will be available at `http://localhost:5173` and the server at `http://localhost:3000`.

### Other useful commands

*   **Build for production:**
    ```bash
    npm run build
    ```

*   **Start the production server:**
    ```bash
    npm start
    ```

*   **Run tests:**
    ```bash
    npm test -- --run
    ```

*   **Lint files:**
    ```bash
    npm run lint
    ```

*   **Format files:**
    ```bash
    npm run format
    ```

## Development Conventions

*   **Code Style:** The project uses ESLint and Prettier to enforce a consistent code style. It's recommended to run `npm run lint` and `npm run format` before committing any changes.
*   **Testing:** The project uses `vitest` for testing. Both front-end and back-end tests are located in their respective `__tests__` and `tests` directories.
*   **Database Migrations:** Database schema changes are managed through Knex migrations. To create a new migration, you can use the `npm run knex migrate:make <migration_name>` command.

## PromptKit Quick Reference
- Review the available artefacts when the student requests them:
  - Protocol: `promptkit/protocols/setup.md` — instructions for updating these CLI briefings.
  - Workflow: `promptkit/workflows/tutor.md` — guide for tutoring/explanation sessions.
  - Workflow: `promptkit/workflows/reflect.md` — guide for documenting outcomes and next steps.
- Student notes live in `promptkit/notes/`; The table in `progress-journal.md` is main place to update with reflections. Instructor Activities are in `promptkit/activities/` (read-only).
- When new workflows arrive, expect additional files under `promptkit/workflows/`.