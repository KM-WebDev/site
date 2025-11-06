"use client";

import { NavigationContext } from "@/context/NavigationProvider";
import { cn } from "@/lib/utils/cn";
import Hamburger from "hamburger-react";
import { useContext } from "react";

interface NavigationToggleButton {
    className?: string;
    size?: number;
}

export function NavigationToggleButton({
    className,
    size = 24,
}: NavigationToggleButton) {
    const { isNavOpen, toggleNav } = useContext(NavigationContext);

    return (
        <button
            type="button"
            className={cn("", className)}
            aria-label="toggle menu"
        >
            <Hamburger size={size} toggled={isNavOpen} onToggle={toggleNav} />
        </button>
    );
}
