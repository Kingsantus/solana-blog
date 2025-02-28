import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
    <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
