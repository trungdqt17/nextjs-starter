# Next.js Starter Template

A modern, production-ready Next.js starter template with TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, Orval for OpenAPI code generation, and type-safe environment variables.

## 🚀 Features

- **Next.js 15** with App Router and Turbopack
- **React 19** with latest features
- **TypeScript** for type safety
- **Tailwind CSS v4** for modern styling
- **shadcn/ui** for beautiful, accessible UI components
- **TanStack Query v5** for powerful server state management
- **Orval** for automatic OpenAPI TypeScript & React Query generation
- **@t3-oss/env-nextjs** for validated environment variables
- **BiomeJS** for fast linting and formatting
- **Docker** support with multi-stage builds
- **Husky & lint-staged** for git hooks
- **Commitlint** for conventional commits
- **Custom hooks** for common patterns
- **Feature-based folder structure** for scalability

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── favicon.ico        # App icon
├── env/                   # Environment variable validation
│   ├── client.ts          # Client-side env vars (NEXT_PUBLIC_*)
│   └── server.ts          # Server-side env vars
├── features/              # Feature-based components
│   ├── auth/              # Authentication features
│   │   └── auth-form.tsx  # Sign in/up form component
│   └── user-management/   # User management features
│       └── user-management.tsx
├── hooks/                 # Custom React hooks
│   ├── use-boolean.ts     # Boolean state management
│   ├── use-countdown.ts   # Countdown timer hook
│   ├── use-counter.ts     # Counter state hook
│   ├── use-debounce-callback.ts # Debounced callbacks
│   ├── use-interval.ts    # Interval management
│   └── use-unmount.ts     # Cleanup on unmount
├── lib/                   # Utilities and configuration
│   ├── fetch-instance.ts  # Custom fetch client for Orval
│   ├── providers.tsx      # TanStack Query provider setup
│   ├── query-client.ts    # Query client configuration
│   └── utils.ts           # shadcn/ui utilities
├── server/                # Generated server-side logic
│   └── react-query/       # Orval generated React Query hooks
│       └── auth.ts        # Authentication API hooks
├── types/                 # TypeScript type definitions
│   ├── model/             # Generated API models
│   │   ├── index.ts       # Model exports
│   │   ├── loginDto.ts    # Login response type
│   │   ├── loginDtoRole.ts# User role types
│   │   └── loginParamsDto.ts # Login request type
└── ui/                    # shadcn/ui components
    ├── button.tsx         # Button component
    ├── card.tsx           # Card component
    └── input.tsx          # Input component
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- yarn, npm, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nextjs-starter
```

2. Install dependencies:
```bash
yarn install
# or npm install
# or pnpm install
```

3. Set up environment variables:
```bash
# Copy the environment template
cp .env.example .env.local

# Edit .env.local with your actual values
# See the Environment Variables section below
```

4. Generate API types and React Query hooks (if you have an API):
```bash
# Set your OpenAPI schema URL
export OPENAPI_SCHEMA=https://your-api-url/docs-json
yarn react-query:generate
```

5. Start the development server:
```bash
yarn dev
# or npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build for production with Turbopack
- `yarn start` - Start production server
- `yarn lint` - Run BiomeJS linting
- `yarn lint:fix` - Fix linting issues automatically
- `yarn format` - Format code with BiomeJS
- `yarn type-check` - Run TypeScript type checking
- `yarn react-query:generate` - Generate TypeScript types and React Query hooks from OpenAPI schema
- `yarn prepare` - Setup Husky git hooks

## 🎨 UI Components

This template includes several shadcn/ui components:

- **Button** - Various button styles and variants
- **Card** - Container components for content
- **Input** - Form input components

To add more components:
```bash
npx shadcn@latest add [component-name]
```

## 🔄 API Integration

The template uses **Orval** to automatically generate TypeScript types and TanStack Query hooks from your OpenAPI specification:

### Using Generated React Query Hooks

```tsx
import { useAuthControllerLogin } from '@/server/react-query/auth';
```

### Custom Fetch Instance

The template includes a custom fetch instance with:
- Authentication middleware
- Error handling
- Request/response interceptors
- Type safety

### Regenerating API Types

When your API changes, regenerate the TypeScript types and hooks:

```bash
export OPENAPI_SCHEMA=https://your-api-url/docs-json
yarn react-query:generate
```

## 🌍 Environment Variables

The template uses **@t3-oss/env-nextjs** for type-safe environment variable validation:

### Setup

1. Create a `.env.local` file in your project root:

```bash
# Client-side variables (exposed to browser, must have NEXT_PUBLIC_ prefix)
NEXT_PUBLIC_API_URL="https://your-api-url/api"
NEXT_PUBLIC_APP_NAME="My App"
NEXT_PUBLIC_APP_VERSION="1.0.0"

# For development - OpenAPI schema URL for code generation
OPENAPI_SCHEMA="https://your-api-url/docs-json"
```

### Usage

```tsx
import { env } from '@/env/client'; // For client-side components
import { env } from '@/env/server'; // For server-side code (empty in this template)

// ✅ Type-safe access with auto-completion
console.log(env.NEXT_PUBLIC_APP_NAME); // "Next.js Starter"
console.log(env.NEXT_PUBLIC_API_URL); // Your API URL

// ✅ Validated at build time - missing variables cause build failures
// ✅ Client/server separation - prevents accidental exposure of secrets
// ✅ Runtime validation - invalid values are caught early
```

### Benefits

- **Type Safety**: Full TypeScript support with IntelliSense
- **Runtime Validation**: Variables validated using Zod schemas
- **Build-time Validation**: Missing variables cause build failures
- **Client/Server Separation**: Prevents accidental exposure of secrets
- **Self-documenting**: Schema serves as living documentation

## 🐳 Docker Support

The template includes optimized Docker configuration:

```bash
# Build the Docker image
docker build -t nextjs-starter .

# Run the container
docker run -p 3000:3000 nextjs-starter
```

Features:
- Multi-stage builds for smaller production images
- Non-root user for security
- Optimized layer caching
- Production-ready configuration

## 📝 Code Quality & Git Hooks

This template includes comprehensive code quality tools:

### BiomeJS (Linting & Formatting)
```bash
# Check for issues
yarn lint

# Fix issues automatically
yarn lint:fix

# Format code
yarn format

# Type checking
yarn type-check
```

### Git Hooks (Husky + lint-staged)
- **Pre-commit**: Automatically formats and lints staged files
- **Commit-msg**: Validates commit messages using conventional commits

### Conventional Commits
The template enforces conventional commit messages:
- `feat:` for new features
- `fix:` for bug fixes  
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [OpenAPI React Query](https://openapi-ts.dev/openapi-react-query/) - Type-safe API calls
- [T3 Env](https://env.t3.gg/) - Environment variable validation
- [TanStack Query](https://tanstack.com/query) - Powerful data synchronization
- [shadcn/ui](https://ui.shadcn.com) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [BiomeJS](https://biomejs.dev) - Fast linter and formatter

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
