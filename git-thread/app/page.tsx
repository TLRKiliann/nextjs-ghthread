import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
      <Button>Click me</Button>
      <Input />
    </div>
  )
}
