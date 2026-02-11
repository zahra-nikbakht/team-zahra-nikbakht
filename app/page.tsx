import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6 bg-muted/40">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Shadcn UI Demo</CardTitle>
          </div>
          <CardDescription>
            Demonstrating shadcn components integration.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input placeholder="Enter your email" />
          <Button className="w-full">Submit</Button>

          <Alert>
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Shadcn UI is installed and working correctly.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </main>
  )
}
