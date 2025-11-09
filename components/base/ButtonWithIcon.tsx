import { cn } from "@/lib/utils";
import Button from "./Button";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonAsButton = {
    as?: "button";
    href?: never;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsLink = {
    as: "link";
    href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonWithIconProps = (ButtonAsButton | ButtonAsLink) & {
    Icon: ReactNode;
    children?: ReactNode;
    text?: string;
    className?: string;
};

export default function ButtonWithIcon({
    className,
    text,
    children,
    Icon,
    ...props
}: ButtonWithIconProps) {
    return (
        <Button className={cn("flex items-center gap-1", className)} {...props}>
            <span>
                {text}
                {children}
            </span>
            {Icon}
        </Button>
    );
}
