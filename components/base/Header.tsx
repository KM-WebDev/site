import Link from "next/link";
import {
    HeaderContainer,
    HeaderNavigation,
    NavigationToggleButton,
} from "./Header.client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import NavigationList from "./NavigationList";
import { BasicComponentProps } from "@/lib/types/global";
import {
    NavigationRoutesEntry,
    NavigationRoutesEntryWithSubRoutes,
} from "@/app/routes";
import NavLink from "./NavLink";
import Button from "./Button";
import { IoIosArrowDown } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";

interface HeaderProps {
    Logo?: ReactNode;
}

export default function Header({ Logo }: HeaderProps) {
    return (
        <HeaderContainer
            className={cn(
                "border-clr-border/50 bg-clr-bg-light/70 fixed top-0 right-0 left-0 z-10000 flex justify-center border-b before:absolute before:inset-0 before:-z-10 before:backdrop-blur-md"
            )}
        >
            <div
                className={cn(
                    "flex w-full max-w-[1200px] items-center justify-between px-5 py-4 lg:py-2"
                )}
            >
                <HeaderLogo Logo={Logo} />
                <Navigation />
                <div className="flex gap-2 text-sm tracking-wider">
                    <Button
                        text="Zakup Stronę"
                        className="text-sm max-lg:hidden"
                    />
                </div>
                <NavigationToggleButton className="lg:hidden" size={30} />
            </div>
        </HeaderContainer>
    );
}

function Navigation({ children, className }: BasicComponentProps) {
    return (
        <HeaderNavigation
            // DESKTOP STYLES - explicitly use lg:
            className={cn(
                "text-clr-text-muted lg:flex lg:items-center lg:gap-4 lg:text-sm",
                className
            )}
            // PHONE STYLES - explicitly use max-lg:
            classNameOnClose="max-lg:hidden"
            classNameOnOpen="max-lg:absolute max-lg:right-0 max-lg:bg-clr-bg max-lg:top-full max-lg:h-screen  max-lg:border-l max-lg:border-t max-lg:border-clr-border/50 "
            // Overlay
            classNameOverlay="bg-clr-bg-light/70 backdrop-blur-lg"
        >
            <NavigationList
                linkRenderer={renderLink}
                innerNavigationRenderer={renderInnerNavigation}
                className="max-lg:p-size-lg flex gap-5 max-lg:h-screen max-lg:min-w-[60vw] max-lg:flex-col max-lg:overflow-y-scroll max-lg:pb-[50svh] lg:items-center"
            />
            {children}
        </HeaderNavigation>
    );
}

function renderLink(route: NavigationRoutesEntry) {
    return <MainLink route={route} />;
}

function MainLink({
    route,
    className,
}: {
    className?: string;
    route: NavigationRoutesEntry;
}) {
    return (
        <NavLink
            closeNavOnClick={true}
            route={route}
            activeClassName="underline"
            className={cn(
                "text-clr-text hover:text-clr-text cursor-pointer px-1 py-0.5 font-medium tracking-wider capitalize",
                className
            )}
        />
    );
}

function InnerLink({
    route,
    className,
}: {
    className?: string;
    route: NavigationRoutesEntry;
}) {
    return (
        <NavLink
            closeNavOnClick={true}
            route={route}
            className={cn(
                "text-clr-text hover:text-clr-text block cursor-pointer px-1 py-0.5 font-medium tracking-wider capitalize",
                className
            )}
        />
    );
}

function renderInnerNavigation(route: NavigationRoutesEntryWithSubRoutes) {
    return (
        <div className="group/link relative">
            <div className="flex items-center">
                <MainLink route={route} className="" />
                <IoIosArrowDown className="h-fit" />
            </div>
            <div className="absolute top-full left-1/2 hidden -translate-x-1/2 group-hover/link:block">
                <InnerNavigation route={route} />
            </div>
        </div>
    );
}

function InnerNavigation({
    route,
}: {
    route: NavigationRoutesEntryWithSubRoutes;
}) {
    return (
        <ul className="mt-size-sm p-size-xs gap-size-xs bg-clr-bg/70 border-clr-border flex w-fit flex-col rounded-b-2xl border-x border-b backdrop-blur-lg">
            {route.subRoutes.map((route) => {
                return (
                    <li key={route.link}>
                        <InnerLink
                            route={route}
                            className="py-size-sm px-size-md bg-clr-bg/5 border-clr-bg-extra-dark hover:bg-clr-bg-dark h-full w-full rounded-xl border text-nowrap backdrop-blur-lg"
                        />
                    </li>
                );
            })}
        </ul>
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
