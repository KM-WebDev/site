import Link from "next/link";
import { HeaderContainer, HeaderNavigation } from "./Header.client";
import { NavigationToggleButton } from "./NavigationToggleButton";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import NavigationList from "./NavigationList";
import { BasicComponentProps } from "@/lib/types/global";
import { NavigationRoutesEntry } from "@/app/routes";
import NavLink from "./NavLink";
import Button from "./Button";

interface HeaderProps {
    Logo?: ReactNode;
}

export default function Header({ Logo }: HeaderProps) {
    return (
        <HeaderContainer
            className={cn(
                "border-clr-border/50 bg-clr-bg-light/50 fixed top-0 right-0 left-0 z-10000 flex justify-center border-b backdrop-blur-md"
            )}
        >
            <div
                className={cn(
                    "flex w-full max-w-[1200px] items-center justify-between px-5 py-4 lg:py-2"
                )}
            >
                <HeaderLogo Logo={Logo} />
                <Navigation>
                    <div className="flex gap-2 text-sm tracking-wider">
                        <Button
                            text="Zamów Audyt"
                            variant="transparent"
                            className="text-sm"
                        />
                        <Button text="Zakup Stronę" className="text-sm" />
                    </div>
                </Navigation>
                <NavigationToggleButton className="lg:hidden" size={30} />
            </div>
        </HeaderContainer>
    );
}

function Navigation({ children }: BasicComponentProps) {
    return (
        <HeaderNavigation
            // DESKTOP STYLES - explicitly use lg:
            className="text-clr-text-muted text-sm lg:flex lg:items-center lg:gap-4"
            // PHONE STYLES - explicitly use max-lg:
            classNameOnClose="max-lg:hidden"
            classNameOnOpen=""
            // Overlay
            classNameOverlay="bg-zinc-700/99"
        >
            <NavigationList linkRenderer={renderLink} className="flex gap-5" />
            {children}
        </HeaderNavigation>
    );
}

function renderLink(route: NavigationRoutesEntry) {
    return (
        <NavLink
            closeNavOnClick={true}
            route={route}
            className="text-clr-text-muted hover:text-clr-text cursor-pointer px-1 py-0.5 font-medium tracking-wider"
        />
    );
}

interface HeaderLogoProps extends BasicComponentProps {
    Logo: ReactNode;
}
function HeaderLogo({ Logo }: HeaderLogoProps) {
    if (!Logo) return <></>;

    return (
        <Link href="/" className={"flex items-center justify-center"}>
            {Logo}
        </Link>
    );
}
