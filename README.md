## Portfolio Project
Welcome to my portfolio project! This repository features my personal portfolio website, inspired by [ByteGrad](https://www.youtube.com/watch?v=sUKptmUVIBM&t=21888s).

<img width="804" alt="image" src="https://github.com/Codefreyy/joy-personal-portfolio/assets/104683968/92cae13b-3e5f-4874-afdb-c432b1a410f0">



## What I Did
- Bug Fixes: Fixed the scrolling bug from the original project.
- Updated Projects Section: Revamped the "Intro" and "Projects" sections.
- UX Enhancements: Added sound effects, animations, and arrow indicators for a more engaging experience.
- Multilingual Support: Added multiple language options using i18nNext.

## Contributions
Contributions are welcome! Fork the repository and submit a pull request.

## Local Development

Follow these steps to run the project locally on your machine.

### Prerequisites
- Node.js 18+ (recommend using nvm)
- pnpm or npm or yarn (any one is fine)

### 1) Install dependencies
Using pnpm:

```bash
pnpm install
```

Or using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn
```

### 2) Start the development server

```bash
pnpm dev
```

Or:

```bash
npm run dev
```

Or:

```bash
yarn dev
```

The app will be available at `http://localhost:3000`.

### 3) Build and preview production

Build:

```bash
pnpm build
```

Preview production build:

```bash
pnpm start
```

### 4) Lint

```bash
pnpm lint
```

### Notes
- This project uses Next.js 14 and `next-intl` for i18n.
- Some UI effects (e.g., typing animation) are client-only; server-rendered fallback text is provided to avoid hydration mismatches.
