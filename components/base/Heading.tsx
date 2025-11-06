import { cn } from "@/lib/utils/cn";

type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type variant = "primary" | "secondary" | "base";

const variants: Record<variant, string> = {
    primary: "text-clr-brand-red-dark",
    secondary: "text-clr-brand-rose",
    base: "text-clr-text",
};

const mutedVariants: Record<variant, string> = {
    primary: "text-clr-brand-red-light",
    secondary: "text-clr-brand-rose-light",
    base: "text-clr-text-muted",
};

export const headingStyles = {
    h1: cn(
        "text-3xl font-bold",
        "xs:text-3xl",
        "sm:text-4xl",
        "md:text-5xl",
        "lg:text-6xl"
    ),
    h2: cn(
        "text-2xl font-bold",
        "xs:text-2xl",
        "sm:text-3xl",
        "md:text-4xl",
        "lg:text-4xl"
    ),
    h3: cn(
        "text-lg font-bold",
        "xs:text-xl",
        "sm:text-xl",
        "md:text-2xl",
        "lg:text-2xl"
    ),
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
    children?: string;
    variant?: variant;
    text?: string;
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
    variant = "primary",
}: HeadingProps) {
    const Tag = semantic ? semantic : "p";
    const styleTarget = styling ? styling : semantic;
    return (
        <Tag
            className={cn(
                "text-clr-text-strong leading-tight",
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
