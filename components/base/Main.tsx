import { cn } from "@/lib/utils/cn";
import { HTMLAttributes } from "react";

export default function Main({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLElement>) {
    return (
        <main className={cn("bg-zinc-50", className)} {...props}>
            {children}
        </main>
    );
}
