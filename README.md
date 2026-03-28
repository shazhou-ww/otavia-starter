# Otavia Starter

A reference project built with the [Otavia](https://otavia.dev) framework — cell-based serverless architecture for modern applications.

## Project Structure

```
otavia-starter/
├── cells/              # Application cells (feature modules)
│   └── hello/          # Hello cell
│       ├── cell.yaml       # Cell configuration
│       ├── backend/        # Hono-based API
│       │   └── app.ts
│       └── frontend/       # Static frontend
│           └── index.html
├── stacks/             # Deployment stacks
│   └── main/           # Main stack (AWS)
│       ├── otavia.yaml     # Stack configuration
│       └── .env.example
├── packages/           # Shared packages
└── package.json        # Bun workspace root
```

## Prerequisites

- [Bun](https://bun.sh) >= 1.1
- [Node.js](https://nodejs.org) >= 20 (for deployment runtime)
- AWS CLI configured (for deployment)

## Getting Started

### Installation

```bash
bun install --no-cache
```

### Development

Start the hello cell dev server:

```bash
cd cells/hello
bun run dev
```

The API will be available at `http://localhost:3000`. Try visiting `http://localhost:3000/api/hello`.

### Build

```bash
bun run build
```

### Deployment

1. Copy the environment file and fill in your credentials:

```bash
cp stacks/main/.env.example stacks/main/.env
```

2. Deploy the stack:

```bash
cd stacks/main
bun run deploy
```

## Cells

Each cell is a self-contained feature module with its own backend and frontend. Cells are defined in `cell.yaml` and can declare variables, backend/frontend directories, and dependencies.

### Hello Cell

A minimal cell demonstrating:

- **Backend**: Hono-based REST API with a `/api/hello` endpoint
- **Frontend**: Simple HTML page that fetches and displays the API response

## Stacks

Stacks define how cells are composed and deployed. The main stack (`stacks/main/otavia.yaml`) configures AWS as the cloud provider with `nodejs20.x` runtime.

## License

MIT
