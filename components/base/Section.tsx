import { cn } from "@/lib/utils";
type paddingDirection = "top" | "bottom";
type SpaceSizes = "xs" | "sm" | "md" | "lg" | "xl";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    padded?: paddingDirection[] | boolean;
    paddingSize?: SpaceSizes;
}

interface ContentProps {
    children: React.ReactNode;
    className?: string;
    gapped?: boolean;
    gapSize?: SpaceSizes;
}

const sectionPaddingTop = {
    xs: "pt-size-xs",
    sm: "pt-size-sm",
    md: "pt-size-md",
    lg: "pt-size-lg",
    xl: "pt-size-xl",
};

const sectionPaddingBottom = {
    xs: "pb-size-xs",
    sm: "pb-size-sm",
    md: "pb-size-md",
    lg: "pb-size-lg",
    xl: "pb-size-xl",
};

export default function Section({
    children,
    className,
    padded = ["top", "bottom"],
    paddingSize = "md",
}: SectionProps) {
    return (
        <section
            className={cn(
                "flex flex-col items-center",
                Array.isArray(padded) &&
                    padded.includes("top") &&
                    sectionPaddingTop[paddingSize],
                Array.isArray(padded) &&
                    padded.includes("bottom") &&
                    sectionPaddingBottom[paddingSize],
                className
            )}
        >
            {children}
        </section>
    );
}

const contentGap = {
    xs: "gap-size-xs",
    sm: "gap-size-sm",
    md: "gap-size-md",
    lg: "gap-size-lg",
    xl: "gap-size-xl",
};

function Content({
    children,
    className,
    gapped = true,
    gapSize = "md",
}: ContentProps) {
    return (
        <div className="flex h-full w-full flex-col items-center">
            <div
                className={cn(
                    "max-xs:px-4",
                    "container flex flex-col px-4 xl:max-w-[1200px]",
                    "lg:px-5",
                    "xl:px-0",
                    gapped && contentGap[gapSize],
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}

Section.Content = Content;
