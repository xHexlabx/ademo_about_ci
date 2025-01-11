# React + TypeScript + Vite

This repository demonstrates a simple project structure for a React application using TypeScript and Vite. It includes essential libraries and configurations to get started quickly with modern web development.

---

## Core Features

1. **React 18** - A powerful JavaScript library for building user interfaces.
2. **TypeScript** - A statically typed superset of JavaScript for better development experience and maintainability.
3. **Vite** - A fast build tool for modern web projects.
4. **React Router** - Declarative routing for React applications.
5. **ShadCN** - A collection of UI components built on top of Tailwind CSS.
6. **Tailwind CSS** - A utility-first CSS framework for rapid UI development.

---

## Want to create your own repository like this?

Follow these steps to set up the project from scratch:

### 1. Initialize the Project

```bash
# Create a new Vite project
npm create vite@latest
```

Then, follow the command-line instructions

```bash
# Navigate into the project directory
cd my-app

# Install dependencies
npm install
```

### 2. Install Core Libraries

Install the additional libraries required for the project:

#### React Router

```bash
npm install react-router-dom
```

#### Tailwind CSS

```bash
# Install Tailwind CSS and its dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind CSS configuration
npx tailwindcss init
```

#### ShadCN

```bash
# Install shadcn components and prerequisites
npm install shadcn-ui
```

---

## Project Structure

```
src/
    assets/             # Static assets (e.g., images, SVGs)
    components/         # Reusable React components
        features/       # Feature-specific components
        ui/             # Shared UI components
    hooks/              # Custom React hooks
        features/       # Feature-specific hooks
    layouts/            # Layout components
    lib/                # Utility functions and helpers
    router/             # Application routing setup
    styles/             # Tailwind CSS and global styles
    views/              # Top-level application pages
    main.tsx            # Application entry point
    vite-env.d.ts       # Vite environment type definitions
```

---

## Running the Project

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open the application in your browser at [http://localhost:5173](http://localhost:5173).

3. To build for production:
   ```bash
   npm run build
   ```

---

## Links to Library Documentation

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN](https://ui.shadcn.com/)

---
