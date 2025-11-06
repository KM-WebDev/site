import { NavigationRoutesEntry, routes } from "@/app/routes";
import NavLink from "./NavLink";

import { ReactNode, useMemo } from "react";
import { BasicComponentProps } from "@/lib/types/global";

type linkRenderer = (route: NavigationRoutesEntry) => ReactNode;

interface NavigationListProps extends BasicComponentProps {
    linkRenderer: linkRenderer;
}
export default function NavigationList({
    className,
    linkRenderer,
}: NavigationListProps) {
    const Links = useMemo(
        () => <GeneratedLinks linkRenderer={linkRenderer} />,
        [linkRenderer]
    );
    return <ul className={className}>{Links}</ul>;
}

function GeneratedLinks({ linkRenderer }: { linkRenderer: linkRenderer }) {
    return routes.map((route) => {
        return (
            <li key={route.name}>
                {linkRenderer && linkRenderer(route)}
                {!linkRenderer && (
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
