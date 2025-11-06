import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

const variants = {
    primary:
        "bg-clr-brand-red text-zinc-100 hover:bg-clr-brand-red-dark shadow",
    opposite: "bg-white hover:bg-clr-brand-rose",
    secondary: "",
};

export interface ButtonProps {
    children?: ReactNode;
    className?: string;
    text?: string;
    href?: string;
    as?: "button" | "link";
    variant?: "primary" | "opposite" | "secondary";
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
    const className =
        "group/button relative flex cursor-pointer items-center justify-center gap-4 rounded-full px-16 py-4 text-base font-medium transition-all duration-200 ";

    const combinedClasses = cn(variants[variant], className, passedClassName);

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
