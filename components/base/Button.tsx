import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type variant = "primary" | "opposite" | "secondary" | "transparent";

const variants = {
    primary: "bg-clr-text text-clr-bg-dark border border-clr-border",
    secondary: "bg-clr-bg-light text-clr-text-strong border border-clr-border",
    opposite: "text-clr-text-strong border border-clr-border bg-clr-bg-light",
    transparent:
        "text-clr-text-strong border border-clr-border bg-clr-bg-light/40 ",
};

export interface ButtonProps {
    children?: ReactNode;
    className?: string;
    text?: string;
    href?: string;
    as?: "button" | "link";
    variant?: variant;
}

export default function Button({
    children,
    variant = "primary",
    className: passedClassName,
    href = "/",
    text,
    as,
    ...props
}: ButtonProps) {
    const base =
        "group/button relative flex cursor-pointer items-center justify-center";
    const className =
        " gap-4 rounded-xl px-6 py-2 text-base font-medium transition-all duration-200";

    const combinedClasses = cn(
        variants[variant],
        base,
        className,
        passedClassName
    );

    if (as === "link" && href) {
        return (
            <Link href={href} className={combinedClasses} {...props}>
                {children || text}
            </Link>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {children}
            {text}
        </button>
    );
}
