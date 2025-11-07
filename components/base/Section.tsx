import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

interface ContentProps {
    children: React.ReactNode;
    className?: string;
}

export default function Section({ children, className }: SectionProps) {
    return (
        <section className={cn("flex flex-col items-center", className)}>
            {children}
        </section>
    );
}

function Content({ children, className }: ContentProps) {
    return (
        <div className="flex h-full w-full flex-col items-center">
            <div
                className={cn(
                    "max-xs:px-4",
                    "flex flex-col px-4 xl:max-w-[1200px]",
                    "lg:px-5",
                    "xl:px-0",
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}

Section.Content = Content;
