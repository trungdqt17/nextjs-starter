import Link from 'next/link';
import { Button } from '@/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card';

export default async function ExamplePage(props: PageProps<'/example/[id]'>) {
  const { id } = await props.params;
  const searchParams = await props.searchParams;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              ← Back to Home
            </Button>
          </Link>

          <h1 className="text-3xl font-bold tracking-tight mb-2">Dynamic Route Example</h1>
          <p className="text-muted-foreground">
            This page demonstrates typed dynamic routes using PageProps helper
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Route Parameters</CardTitle>
              <CardDescription>Dynamic segment extracted from the URL path</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm font-medium">ID Parameter:</p>
                <code className="block p-3 bg-muted rounded-md text-sm">{id}</code>
                <p className="text-xs text-muted-foreground">
                  This comes from the [id] dynamic segment in the URL
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Search Parameters</CardTitle>
              <CardDescription>Query string parameters from the URL</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm font-medium">Query String:</p>
                <code className="block p-3 bg-muted rounded-md text-sm">
                  {Object.keys(searchParams).length > 0
                    ? JSON.stringify(searchParams, null, 2)
                    : 'No search parameters'}
                </code>
                <p className="text-xs text-muted-foreground">
                  Try adding ?name=value&test=example to the URL
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>TypeScript Benefits</CardTitle>
              <CardDescription>How PageProps provides type safety</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Automatic type inference for route parameters</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>IntelliSense support for parameter names</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Compile-time validation of route structure</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Refactoring safety when routes change</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Try Different IDs</CardTitle>
              <CardDescription>Test the dynamic routing with different values</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Link href="/example/123">
                  <Button variant="outline" size="sm">
                    ID: 123
                  </Button>
                </Link>
                <Link href="/example/test">
                  <Button variant="outline" size="sm">
                    ID: test
                  </Button>
                </Link>
                <Link href="/example/user-456">
                  <Button variant="outline" size="sm">
                    ID: user-456
                  </Button>
                </Link>
                <Link href="/example/hello-world?name=Next.js&type=demo">
                  <Button variant="outline" size="sm">
                    With Query Params
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
