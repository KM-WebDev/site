import { cn } from "@/lib/utils";

export function DotBackground() {
    return (
        <div
            className={cn(
                "absolute inset-0",
                "[background-size:20px_20px]",
                "[background-image:radial-gradient(var(--color-clr-bg-dark)_1px,transparent_1px)]"
            )}
        >
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,var(--color-clr-bg)_20%,var(--color-clr-bg))]"></div>
        </div>
    );
}
