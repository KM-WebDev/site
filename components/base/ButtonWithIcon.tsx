import { cn } from "@/lib/utils/cn";
import Button, { ButtonProps } from "./Button";
import { ReactNode } from "react";

interface ButtonWithIconProps extends ButtonProps {
    Icon: ReactNode;
}

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
