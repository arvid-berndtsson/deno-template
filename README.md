# Deno Project Template 🦕

[![Deno](https://img.shields.io/badge/deno-^2.40-black?logo=deno)](https://deno.land)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A clean, minimal template for Deno CLI applications with built-in testing, formatting, and compilation support.

## ✨ Features

*   **🚀 Ready to Run**: Minimal CLI application with command-line argument parsing
*   **🧪 Testing Setup**: Basic test structure with Deno's built-in test runner
*   **📦 Compilation Ready**: Easy compilation to native executables for all platforms
*   **🔧 Development Tools**: Pre-configured tasks for development, testing, and formatting
*   **📋 Task Management**: Mise.toml for easy task running and project management

## 🚀 Quick Start

### Prerequisites

- **Deno**: Install from [deno.land](https://deno.land)
- **Mise** (optional): Install from [mise.jdx.dev](https://mise.jdx.dev) for enhanced task management

### Running the Application

```bash
# Basic run
deno run main.ts

# With arguments
deno run main.ts --name "Your Name"

# Development mode with file watching
deno task dev
```

### Testing

```bash
# Run tests
deno test

# Run tests in watch mode
deno task test:watch
```

### Code Quality

```bash
# Format code
deno task fmt

# Lint code
deno task lint
```

## 📦 Compilation

Create standalone executables for distribution:

```bash
# Compile for current platform
deno task build

# Compile for all platforms
deno task build-all
```

## 🛠️ Available Tasks

### Using Deno Tasks
```bash
deno task dev      # Development mode with file watching
deno task test     # Run tests
deno task fmt      # Format code
deno task lint     # Lint code
deno task build    # Compile to executable
```

### Using Mise (if installed)
```bash
mise run dev       # Development mode
mise run test      # Run tests
mise run fmt       # Format code
mise run lint      # Lint code
mise run build     # Compile to executable
mise run build-all # Compile for all platforms
```

## 📁 Project Structure

```
├── main.ts          # Main application entry point
├── main_test.ts     # Test file
├── deno.json        # Deno configuration and tasks
├── deno.lock        # Dependency lock file
├── mise.toml        # Mise task definitions
├── README.md        # This file
└── LICENSE          # MIT License
```

## 🔧 Customization

1. **Update Application Name**: Change the app name in `main.ts`
2. **Add Dependencies**: Update `deno.json` imports section
3. **Modify Tasks**: Edit `deno.json` and `mise.toml` for custom tasks
4. **Add Features**: Extend `main.ts` with your application logic

## 📄 License

This project is licensed under the [MIT License](LICENSE).
