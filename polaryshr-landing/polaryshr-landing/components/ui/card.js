import { cn } from "@/lib/utils";

export function Card({ className = "", children }) {
  return <div className={cn("border bg-white", className)}>{children}</div>;
}

export function CardContent({ className = "", children }) {
  return <div className={cn(className)}>{children}</div>;
}
