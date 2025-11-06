import { BasicComponentProps } from "@/lib/types/global";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type size = "normal" | "small" | "large" | "xlarge";
type variant = "primary" | "secondary" | "base";
type styling = "normal" | "bold" | "semibold" | "italic";
type semantic = "span" | "p" | null;
type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const variants: Record<variant, string> = {
    primary: "",
    secondary: "",
    base: "text-clr-text",
};

const mutedVariants: Record<variant, string> = {
    primary: "",
    secondary: "",
    base: "text-clr-text-muted",
};

const sizes: Record<size, string> = {
    small: "text-sm",
    normal: "text-base leading-loose",
    large: "text-lg",
    xlarge: "text-xl",
};

const stylings: Record<styling, string> = {
    normal: "",
    bold: "font-bold",
    semibold: "font-semibold",
    italic: "",
};

interface TextProps extends BasicComponentProps {
    semantic?: semantic | Heading;
    variant?: variant;
    size?: size;
    text?: ReactNode;
    styling?: styling;
    muted?: boolean;
}

export default function Text({
    children,
    className,
    text,
    semantic = "p",
    size = "normal",
    variant = "base",
    styling = "normal",
    muted = false,
}: TextProps) {
    const Content = (
        <>
            {children}
            {text}
        </>
    );

    if (semantic === null) return Content;
    const Tag = semantic;
    return (
        <Tag
            className={cn(
                "",
                sizes[size],
                stylings[styling],
                variants[variant],
                muted && mutedVariants[variant],
                className
            )}
        >
            {Content}
        </Tag>
    );
}
