import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Next.js + shadcn/ui</h1>
          <ThemeToggle />
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">
              Welcome to your Next.js app
            </h2>
            <p className="text-xl text-muted-foreground">
              Built with shadcn/ui components and dark/light mode support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>🎨 Theme Support</CardTitle>
                <CardDescription>
                  Toggle between light, dark, and system themes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The theme toggle in the header allows you to switch between light, dark, and system preference modes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🧩 shadcn/ui Components</CardTitle>
                <CardDescription>
                  Beautiful, accessible components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  This app uses shadcn/ui components that are fully customizable and built on top of Radix UI.
                </p>
                <Button className="w-full">Example Button</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>⚡ Next.js 15</CardTitle>
                <CardDescription>
                  Latest Next.js with App Router
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Built with the latest Next.js features including the App Router, TypeScript, and Tailwind CSS.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Get Started</h3>
            <p className="text-muted-foreground">
              Edit <code className="bg-muted px-2 py-1 rounded text-sm">src/app/page.tsx</code> to customize this page
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="default">Primary Action</Button>
              <Button variant="outline">Secondary Action</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}