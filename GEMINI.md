# GEMINI.md - Zenit Finance Context

## Project Overview
**Zenit Finance** is a modern, high-performance landing page for a financial management platform. Developed by **Zenit Tech**, it aims to provide users with an intuitive interface for controlling expenses, investments, and achieving financial freedom.

### Core Technology Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Linting & Formatting:** [Biome](https://biomejs.dev/)
- **Validation:** [Zod](https://zod.dev/)
- **Charts:** [Recharts](https://recharts.org/)

---

## 🛠️ Building and Running

### Commands
The project uses `pnpm` (inferred from `pnpm-lock.yaml`) as the package manager.

| Task | Command | Description |
| :--- | :--- | :--- |
| **Development** | `pnpm dev` | Starts the Next.js development server. |
| **Build** | `pnpm build` | Compiles the project for production. |
| **Start** | `pnpm start` | Runs the production-built application. |
| **Linting** | `pnpm lint` | Runs Biome to check for linting and style issues. |
| **Formatting** | `pnpm format` | Automatically formats code using Biome. |

### Environment Variables
Environment variables are strictly validated using Zod in `src/env.ts`. Ensure these are set in your `.env` file:
- `NEXT_PUBLIC_APP_URL`: The public URL of the application (must be a valid URL).

---

## 📁 Project Structure

- `src/app/`: Next.js App Router routes and layouts.
  - `layout.tsx`: Root layout with metadata (SEO) and global styles.
  - `page.tsx`: Main entry point.
- `src/components/`: Reusable React components.
  - `landing-page.tsx`: The primary landing page implementation.
  - `logo.tsx`: Shared logo component.
- `src/lib/`: Utility functions and shared logic.
  - `utils.ts`: Contains `cn` for Tailwind class merging.
- `src/env.ts`: Environment variable schema and validation logic.
- `public/`: Static assets (SVG logos, icons).
- `biome.json`: Configuration for linting and formatting.

---

## 🎨 Development Conventions

### Coding Style (Biome)
The project adheres to the following Biome rules (defined in `biome.json`):
- **Indentation:** 2 spaces.
- **Quotes:** Single quotes for JavaScript/TypeScript, double quotes for JSX.
- **Semicolons:** Omitted where possible (`asNeeded`).
- **Trailing Commas:** None.
- **Import Organization:** Enabled and automated via `pnpm format`.

### Styling Guidelines
- **Tailwind CSS v4:** Use utility classes for styling.
- **Theme:** Supports dark/light modes (handled via `next-themes` and `cn` utility).
- **Animations:** Use `motion` for interactive elements and entry animations.

### Best Practices
- **Type Safety:** Always use TypeScript interfaces/types for props and state.
- **Validation:** Use Zod for any data validation (forms, env vars, APIs).
- **SEO:** Update metadata in `layout.tsx` or page-specific `metadata` exports.
- **Icons:** Prefer `lucide-react` for consistency.

---

## 🛡️ Security & Performance
- **Safe Environment:** Environment variables are parsed at runtime/build time to ensure early failure if misconfigured.
- **Optimized Assets:** Uses Next.js local fonts (`Geist`) and SVG assets for performance.
- **Clean Code:** Biome is strictly enforced to maintain a high-quality, readable codebase.
