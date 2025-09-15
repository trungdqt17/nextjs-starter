import Link from 'next/link';
import { AuthForm } from '@/features/auth/auth-form';
import { Button } from '@/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card';
import { Input } from '@/ui/input';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Next.js Starter Template</h1>
          <p className="text-xl text-muted-foreground">
            A modern Next.js starter with TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, and
            BiomeJS
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>App Router</CardTitle>
              <CardDescription>
                Organized routes using route groups (auth), (dashboard), (marketing)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/example/123">
                <Button variant="outline" className="w-full">
                  Dynamic Route Example
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>
                Groups all UI, hooks, and server actions related to specific features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Features
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Server Logic</CardTitle>
              <CardDescription>
                Handles backend logic: DB, services, queries/mutations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Server Actions
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>UI Components</CardTitle>
              <CardDescription>
                Reusable UI components (Button, Input, Modal, EmptyState)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Browse Components
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Fetching</CardTitle>
              <CardDescription>TanStack Query + Axios for efficient data fetching</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                API Examples
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Code Quality</CardTitle>
              <CardDescription>BiomeJS for linting and formatting</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Run Linting
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Quick Start</CardTitle>
              <CardDescription>Try out the components and features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Input placeholder="Enter your name..." className="flex-1" />
                <Button>Submit</Button>
              </div>
              <div className="flex gap-2">
                <Button variant="default">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
