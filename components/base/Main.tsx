import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function Main({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLElement>) {
    return (
        <main className={cn("", className)} {...props}>
            {children}
        </main>
    );
}
