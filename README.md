# Next.js Starter Template

A modern, production-ready Next.js starter template with TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, Axios, and BiomeJS.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for beautiful UI components
- **TanStack Query** for server state management
- **Axios** for HTTP requests
- **BiomeJS** for linting and formatting
- **Vitest** for testing
- **Organized folder structure** for scalability

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth route group
│   │   └── login/         # Login page
│   ├── (dashboard)/       # Dashboard route group
│   │   └── dashboard/     # Dashboard page
│   ├── (marketing)/      # Marketing route group
│   │   └── about/         # About page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── features/             # Feature-based components
│   ├── auth/             # Authentication feature
│   └── user-management/  # User management feature
├── server/                    # Logic server side
│   ├── db/                    # DB + Prisma
│   │   └── client.ts
│   ├── services/              # Backend (Stripe, email, ...)
│   │   └── stripeService.ts
│   ├── queries/               # Data fetching (React Query, tRPC…)
│   │   ├── events.ts
│   │   └── users.ts
│   └── mutations/             # Data mutation
│       └── createEvent.ts
├── ui/                   # Reusable UI components
│   ├── button.tsx
│   ├── card.tsx
│   └── input.tsx
├── lib/                  # Utilities and helpers
│   ├── api.ts           # Axios configuration
│   ├── providers.tsx    # React Query provider
│   ├── utils.ts         # shadcn/ui utilities
│   └── helpers.ts       # General utilities
├── types/               # TypeScript type definitions
│   └── index.ts
└── tests/               # Test files
    ├── setup.ts
    ├── helpers.test.ts
    └── auth-form.test.tsx
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nextjs-starter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run BiomeJS linting
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Format code with BiomeJS
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests in watch mode
- `npm run test:ui` - Run tests with UI
- `npm run test:run` - Run tests once

## 🎨 UI Components

This template includes several shadcn/ui components:

- **Button** - Various button styles and variants
- **Card** - Container components for content
- **Input** - Form input components

To add more components:
```bash
npx shadcn@latest add [component-name]
```

## 🔄 Data Fetching

The template uses TanStack Query for server state management:

```tsx
import { useUsers } from '@/lib/hooks';

function UserList() {
  const { data: users, isLoading, error } = useUsers();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## 🧪 Testing

Tests are written with Vitest and React Testing Library:

```bash
# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests once
npm run test:run
```

## 📝 Code Quality

This template uses BiomeJS for linting and formatting:

```bash
# Check for issues
npm run lint

# Fix issues automatically
npm run lint:fix

# Format code
npm run format
```

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TanStack Query](https://tanstack.com/query)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [BiomeJS](https://biomejs.dev)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.