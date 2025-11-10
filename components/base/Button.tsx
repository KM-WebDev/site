import { cn } from "@/lib/utils";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

type Variant = "primary" | "opposite" | "secondary" | "transparent" | "text";

const variants = {
    primary: "bg-clr-text text-clr-bg-dark border border-clr-border",
    secondary: "bg-clr-bg-light text-clr-text-strong border border-clr-border",
    opposite: "text-clr-text-strong border border-clr-border bg-clr-bg-light",
    transparent:
        "text-clr-text-strong border border-clr-border bg-clr-bg-light/40 ",
    text: "px-0 text-clr-text-muted py-0",
};

type ButtonProps = ButtonBaseProps & {
    variant?: Variant;
};

export default function Button({
    variant = "primary",
    capitalize = true,
    className: passedClassName,
    ...props
}: ButtonProps) {
    const className = cn(
        "group/button relative flex cursor-pointer items-center justify-center gap-4 rounded-xl px-6 py-2 text-base font-medium transition-all duration-200",
        capitalize && "capitalize",
        variants[variant],
        passedClassName
    );
    return <ButtonBase className={className} {...props} />;
}
