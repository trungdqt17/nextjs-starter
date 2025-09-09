# Next.js Starter Template

A modern, production-ready Next.js starter template with TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, OpenAPI integration, and type-safe environment variables.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for beautiful UI components
- **TanStack Query** for server state management
- **OpenAPI React Query** for type-safe API calls
- **@t3-oss/env-nextjs** for validated environment variables
- **BiomeJS** for linting and formatting
- **OpenAPI TypeScript** code generation
- **Organized folder structure** for scalability

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── favicon.ico        # App icon
├── env/                   # Environment variable configuration
│   ├── client.ts          # Client-side env vars (NEXT_PUBLIC_*)
│   └── server.ts          # Server-side env vars
├── features/              # Feature-based components
│   ├── auth/              # Authentication components
│   │   └── auth-form.tsx  # Login/register form
│   └── user-management/   # User management components
│       └── user-management.tsx
├── hooks/                 # Custom React hooks
│   ├── use-boolean.ts     # Boolean state hook
│   ├── use-countdown.ts   # Countdown timer hook
│   ├── use-counter.ts     # Counter hook
│   ├── use-debounce-callback.ts
│   ├── use-interval.ts    # Interval hook
│   └── use-unmount.ts     # Unmount effect hook
├── lib/                   # Utilities and configuration
│   ├── api.ts            # OpenAPI React Query client
│   ├── providers.tsx     # React Query provider
│   └── utils.ts          # shadcn/ui utilities
├── server/               # Server-side logic
│   └── services.ts       # API service functions
├── types/                # TypeScript type definitions
│   ├── index.ts          # Common types
│   ├── model.ts          # Data models
│   └── openapi.d.ts      # Generated OpenAPI types
└── ui/                   # shadcn/ui components
    ├── button.tsx        # Button component
    ├── card.tsx          # Card component
    └── input.tsx         # Input component
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

4. Generate OpenAPI types (if you have an API):
```bash
yarn openapi:gen
```

5. Start the development server:
```bash
yarn dev
# or npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run BiomeJS linting
- `yarn lint:fix` - Fix linting issues automatically
- `yarn format` - Format code with BiomeJS
- `yarn type-check` - Run TypeScript type checking
- `yarn openapi:gen` - Generate TypeScript types from OpenAPI schema

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

The template uses **OpenAPI React Query** for type-safe API calls with TanStack Query:

### Using React Query Hooks

```tsx
import { $api } from '@/lib/api';

function UserProfile({ userId }: { userId: number }) {
  // Type-safe query with auto-completion
  const { data, error, isLoading } = $api.useQuery('get', '/users/{id}', {
    params: { 
      path: { id: userId },
      header: { "x-app-lang": "en" }
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>User: {data?.name}</div>;
}
```

### Using Mutations

```tsx
function CreateUser() {
  const { mutate: createUser, isPending } = $api.useMutation('post', '/users');
  
  const handleCreate = () => {
    createUser({
      params: { header: { "x-app-lang": "en" } },
      body: { name: 'John', email: 'john@example.com' },
    });
  };

  return (
    <button onClick={handleCreate} disabled={isPending}>
      {isPending ? 'Creating...' : 'Create User'}
    </button>
  );
}
```

### Regenerating API Types

When your API changes, regenerate the TypeScript types:

```bash
yarn openapi:gen
```

## 🌍 Environment Variables

The template uses **@t3-oss/env-nextjs** for type-safe environment variable validation:

### Setup

1. Create a `.env.local` file in your project root:

```bash
# Server-side variables (secure, not exposed to client)
DATABASE_URL="postgresql://user:password@localhost:5432/database"
OPENAI_API_KEY="sk-..."
NODE_ENV="development"

# Client-side variables (exposed to browser, must have NEXT_PUBLIC_ prefix)
NEXT_PUBLIC_API_URL="http://localhost:4000/api"
NEXT_PUBLIC_APP_NAME="My App"
NEXT_PUBLIC_APP_VERSION="1.0.0"
```

### Usage

```tsx
import { env } from '@/env/client'; // For client-side components
import { env } from '@/env/server'; // For server-side code

// ✅ Type-safe access with auto-completion
console.log(env.NEXT_PUBLIC_APP_NAME); // "My App"

// ✅ Validated at build time - missing variables cause build failures
// ✅ Client/server separation - server vars throw error if accessed on client
// ✅ Runtime validation - invalid values are caught early
```

### Benefits

- **Type Safety**: Full TypeScript support with IntelliSense
- **Runtime Validation**: Variables validated using Zod schemas
- **Build-time Validation**: Missing variables cause build failures
- **Client/Server Separation**: Prevents accidental exposure of secrets
- **Self-documenting**: Schema serves as living documentation

## 🧪 Testing

Testing setup can be added using Vitest and React Testing Library. The project structure supports testing with organized test files.

## 📝 Code Quality

This template uses BiomeJS for linting and formatting:

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
