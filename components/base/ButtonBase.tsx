import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonAsButton = {
    as?: "button";
    href?: never;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsLink = {
    as: "link";
    href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonBaseProps = (ButtonAsButton | ButtonAsLink) & {
    children?: ReactNode;
    className?: string;
    text?: string;
    capitalize?: boolean;
};

export default function ButtonBase({
    children,
    className,
    href,
    text,
    as = "button",
    ...props
}: ButtonBaseProps) {
    if (as === "link" && href) {
        //  Narrow the props to anchor-specific ones
        const linkProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
        return (
            <Link href={href} className={className} {...linkProps}>
                {children || text}
            </Link>
        );
    }

    // Narrow the props to button-specific ones
    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
        <button className={className} {...buttonProps}>
            {children || text}
        </button>
    );
}
