import {
    NavigationRoutesEntry,
    NavigationRoutesEntryWithSubRoutes,
    routes,
} from "@/app/routes";
import NavLink from "./NavLink";

import { ReactNode } from "react";
import { BasicComponentProps } from "@/lib/types/global";

type linkRenderer = (route: NavigationRoutesEntry) => ReactNode;

type innerNavigationRenderer = (
    route: NavigationRoutesEntryWithSubRoutes
) => ReactNode;

interface NavigationListProps extends BasicComponentProps {
    linkRenderer: linkRenderer;
    innerNavigationRenderer: innerNavigationRenderer;
}

export function hasSubRoutes(
    route: NavigationRoutesEntry
): route is NavigationRoutesEntryWithSubRoutes {
    return Array.isArray(route.subRoutes) && route.subRoutes.length > 0;
}

export default function NavigationList({
    className,
    linkRenderer,
    innerNavigationRenderer,
}: NavigationListProps) {
    return (
        <ul className={className}>
            <GeneratedLinks
                linkRenderer={linkRenderer}
                innerNavigationRenderer={innerNavigationRenderer}
            />
        </ul>
    );
}

function GeneratedLinks({
    linkRenderer,
    innerNavigationRenderer,
}: Pick<
    NavigationListProps,
    "linkRenderer" | "innerNavigationRenderer" | "className"
>) {
    return routes.map((route) => {
        const hasInnerRoutes = route.subRoutes && route.subRoutes.length > 0;

        return (
            <li key={route.name}>
                {hasSubRoutes(route) && innerNavigationRenderer(route)}
                {(!hasInnerRoutes && linkRenderer?.(route)) ?? (
                    <NavLink
                        closeNavOnClick={true}
                        route={route}
                        className="text-clr-text-muted cursor-pointer font-medium hover:text-gray-900"
                        activeClassName=""
                        ctaClassName=""
                    />
                )}
            </li>
        );
    });
}
