import { cn } from "@/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "default" | "muted" | "small";
}

export function Text({ variant = "default", className, ...props }: TextProps) {
  return (
    <p
      className={cn(
        "leading-relaxed text-foreground",
        variant === "muted" && "text-muted-foreground",
        variant === "small" && "text-sm",
        className
      )}
      {...props}
    />
  );
}
