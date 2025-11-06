import Link from "next/link";
import { HeaderContainer, HeaderNavigation } from "./Header.client";
import { NavigationToggleButton } from "./NavigationToggleButton";
import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";
import NavigationList from "./NavigationList";
import { BasicComponentProps } from "@/lib/types/global";
import Breakpoint from "@/controls/Breakpoint";
import { NavigationRoutesEntry } from "@/app/routes";
import NavLink from "./NavLink";

interface HeaderProps {
    Logo?: ReactNode;
}

export default function Header({ Logo }: HeaderProps) {
    return (
        <HeaderContainer className={cn("fixed top-0 right-0 left-0 z-10000")}>
            <div
                className={cn(
                    "bg-zinc-200",
                    "flex justify-between py-4 lg:py-3"
                )}
            >
                <HeaderLogo
                    Logo={Logo}
                    className="flex items-center justify-center"
                />
                <HeaderNavigation
                    // DESKTOP STYLES - explicitly use lg:
                    className=""
                    // PHONE STYLES - explicitly use max-lg:
                    classNameOnClose="max-lg:hidden"
                    classNameOnOpen=""
                    // Overlay
                    classNameOverlay="bg-zinc-700/99"
                >
                    <NavigationList
                        linkRenderer={renderLink}
                        className="flex gap-5"
                    />
                </HeaderNavigation>
                <Breakpoint breakpoint="lg" condition="less" fallback>
                    <NavigationToggleButton className="" size={30} />
                </Breakpoint>
            </div>
        </HeaderContainer>
    );
}

function renderLink(route: NavigationRoutesEntry) {
    return (
        <NavLink
            closeNavOnClick={true}
            route={route}
            className="text-clr-text cursor-pointer font-medium hover:text-red-500"
            activeClassName=""
            ctaClassName="px-4 py-1.5 max-lg:mt-5 bg-clr-brand-red w-full flex text-white justify-center rounded-full"
        />
    );
}

interface HeaderLogoProps extends BasicComponentProps {
    Logo: ReactNode;
}
function HeaderLogo({ Logo, className }: HeaderLogoProps) {
    if (!Logo) return <></>;

    return (
        <Link href="/" className={className}>
            {Logo}
        </Link>
    );
}
