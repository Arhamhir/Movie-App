# Movie App

Compact movie browser built with React and Vite. It lists popular movies, supports search, and lets you manage favorites with a simple UI.

## Tech
- React + Vite
- React Router
- Context API for shared state
- Fetch API for data access
- CSS modules per feature folder

## How it works
- UI pages live under `src/pages`.
- API calls are centralized in `src/services/api.js`.
- Global movie state is provided by `src/contexts/MovieContext.jsx`.
- Favorites are stored client side (local state), then rendered in the Favorites page.

## Setup
Create a local env file and add your API key:

```env
VITE_IMDB_API_KEY=your_key_here
```

Install and run:

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Live Demo
https://movie-app-sigma-ruby-58.vercel.app
