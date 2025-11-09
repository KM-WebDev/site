import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type variant = "primary" | "opposite" | "secondary" | "transparent" | "text";

const variants = {
    primary: "bg-clr-text text-clr-bg-dark border border-clr-border",
    secondary: "bg-clr-bg-light text-clr-text-strong border border-clr-border",
    opposite: "text-clr-text-strong border border-clr-border bg-clr-bg-light",
    transparent:
        "text-clr-text-strong border border-clr-border bg-clr-bg-light/40 ",
    text: "px-0 text-clr-text-muted py-0",
};

type ButtonAsButton = {
    as?: "button";
    href?: never;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsLink = {
    as: "link";
    href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = (ButtonAsButton | ButtonAsLink) & {
    children?: ReactNode;
    className?: string;
    text?: string;
    variant?: variant;
    capitalize?: boolean;
};

export default function Button({
    children,
    variant = "primary",
    capitalize = true,
    className: passedClassName,
    href,
    text,
    as,
    ...props
}: ButtonProps) {
    const base =
        "group/button relative flex cursor-pointer items-center justify-center";
    const className =
        "gap-4 rounded-xl px-6 py-2 text-base font-medium transition-all duration-200";

    const combinedClasses = cn(
        capitalize && "capitalize",
        base,
        className,
        variants[variant],
        passedClassName
    );

    if (as === "link" && href) {
        //  Narrow the props to anchor-specific ones
        const linkProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
        return (
            <Link href={href} className={combinedClasses} {...linkProps}>
                {children || text}
            </Link>
        );
    }

    // Narrow the props to button-specific ones
    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
        <button className={combinedClasses} {...buttonProps}>
            {children || text}
        </button>
    );
}
