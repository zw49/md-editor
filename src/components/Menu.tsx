import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Menu() {
  return (
    <Button variant={"outline"}>
      <MenuIcon className="h-6 w-6" />
    </Button>
  );
}
