"use client";

import { ReactNode, useCallback, useContext, useEffect, useRef } from "react";
import { NavigationContext } from "../../context/NavigationProvider";
import { BasicComponentProps } from "@/lib/types/global";
import { cn } from "@/lib/utils/cn";
import { createPortal } from "react-dom";

interface HeaderContainerProps {
    children: ReactNode;
    className?: string;
}
export function HeaderContainer({ children, className }: HeaderContainerProps) {
    const { headerRef } = useContext(NavigationContext);
    return (
        <header ref={headerRef} className={cn("z-100000", className)}>
            {children}
        </header>
    );
}

interface HeaderHeightProps {
    className?: string;
}
export function HeaderHeightPadding({ className }: HeaderHeightProps) {
    const { headerRef } = useContext(NavigationContext);
    const paddingRef = useRef<HTMLDivElement | null>(null);

    const resizeHandler = useCallback(() => {
        if (headerRef.current && paddingRef.current) {
            const { height } = headerRef.current.getBoundingClientRect();
            paddingRef.current.style.height = height.toString() + "px";
        }
    }, [headerRef, paddingRef]);

    useEffect(() => {
        const node = headerRef.current;
        if (!node) return;
        resizeHandler();

        const resizeObserver = new ResizeObserver(resizeHandler);
        resizeObserver.observe(node);
        return () => resizeObserver.disconnect();
    }, [headerRef, paddingRef, resizeHandler]);

    return <div ref={paddingRef} className={className} />;
}

interface HeaderNavigationProps extends BasicComponentProps {
    isOpened?: boolean;
    classNameOnOpen?: string;
    classNameOnClose?: string;
    classNameOverlay?: string;
}
export function HeaderNavigation({
    children,
    className,
    classNameOnClose,
    classNameOnOpen,
    classNameOverlay,
}: HeaderNavigationProps) {
    const { isNavOpen, closeNav } = useContext(NavigationContext);

    return (
        <nav
            className={cn(
                "",
                isNavOpen ? classNameOnOpen : classNameOnClose,
                className
            )}
        >
            {isNavOpen &&
                createPortal(
                    <Overlay
                        onClick={closeNav}
                        isOpen={isNavOpen}
                        className={classNameOverlay}
                    />,
                    document.body
                )}
            {children}
        </nav>
    );
}

function Overlay({
    onClick,
    className,
    isOpen,
}: {
    onClick: () => void;
    className?: string;
    isOpen: boolean;
}) {
    return (
        <div
            className={cn(
                "fixed inset-0 z-1000 lg:hidden",
                isOpen ? "" : "hidden",
                className
            )}
            style={{
                visibility: isOpen ? "visible" : "hidden",
                pointerEvents: isOpen ? "auto" : "none",
                opacity: isOpen ? "1" : "0",
                zIndex: isOpen ? "" : "-10",
                display: isOpen ? "block" : "hidden",
                transition: "opacity 0.3s",
            }}
            onClick={onClick}
        />
    );
}
