import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type variant = "primary" | "secondary" | "base";

const variants: Record<variant, string> = {
    primary: "text-sky-800",
    secondary: "",
    base: "text-clr-text-strong",
};

const mutedVariants: Record<variant, string> = {
    primary: "",
    secondary: "",
    base: "text-clr-text-muted",
};

export const headingStyles = {
    h1: cn(
        "font-bold leading-tight tracking-tight",
        "text-4xl",
        "xs:text-4xl",
        "sm:text-5xl",
        "md:text-6xl",
        "lg:text-6xl"
    ),
    h2: cn("font-bold leading-snug tracking-tight", "text-2xl", "xs:text-3xl"),
    h3: cn("text-xl ", "font-medium leading-snug", "xs:text-2xl"),
    h4: cn(
        "text-lg font-semibold",
        "xs:text-xl",
        "sm:text-xl",
        "md:text-xl",
        "lg:text-xl"
    ),
    h5: cn(
        "text-base font-semibold",
        "xs:text-lg",
        "sm:text-lg",
        "md:text-xl",
        "lg:text-xl"
    ),
    h6: cn(
        "text-base font-semibold",
        "xs:text-lg",
        "sm:text-lg",
        "md:text-lg",
        "lg:text-lg"
    ),
};

interface HeadingProps {
    styling?: Heading;
    semantic?: Heading;
    children?: ReactNode;
    variant?: variant;
    text?: ReactNode;
    muted?: boolean;
    className?: string;
}

export default function Heading({
    children,
    styling,
    semantic,
    className,
    muted = false,
    text,
    variant = "base",
}: HeadingProps) {
    const Tag = semantic ? semantic : "span";
    const styleTarget = styling ? styling : semantic;
    return (
        <Tag
            className={cn(
                "text-clr-text-strong font-heading leading-tight",
                styleTarget && headingStyles[styleTarget],
                variants[variant],
                muted && mutedVariants[variant],
                className
            )}
        >
            {children}
            {text}
        </Tag>
    );
}
