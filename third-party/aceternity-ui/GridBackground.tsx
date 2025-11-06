import { cn } from "@/lib/utils";

export function GridBackground() {
    return (
        <div
            className={cn(
                "absolute inset-0",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
        >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent)] dark:bg-black"></div>
        </div>
    );
}
//  {/* Radial gradient for the container to give a faded look */}
//
