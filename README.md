# Cozy Coder Workbench

Build apps and websites by chatting with AI.

## Features

- 💬 Interactive AI chat interface
- 📁 Real-time file tree viewer
- 💾 Chat history management
- ✨ Beautiful, modern UI
- 🎨 Dark/Light mode support

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons
- **Radix UI** - UI primitives

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── ui/          # UI primitives
│   ├── ChatInterface.tsx
│   ├── ChatSidebar.tsx
│   ├── FileTree.tsx
│   └── WorkbenchHeader.tsx
├── pages/           # Page components
│   ├── LandingPage.tsx
│   └── WorkbenchPage.tsx
├── lib/             # Utilities
│   └── utils.ts
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT
