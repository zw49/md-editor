import { Text } from "@/components/ui/text";
import { Loader2Icon } from "lucide-react";
import { logout } from "./actions";

export default async function Logout() {
  await logout();
  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col gap-3">
      <Text variant={"muted"}>Logging out...</Text>
      <Loader2Icon className="h-10 w-10 animate-spin" />
    </div>
  )
}
