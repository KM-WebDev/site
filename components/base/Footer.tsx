import { routes, legalRoutes, NavigationRoutes } from "@/app/routes";
import { BasicComponentProps } from "@/lib/types/global";
import { cn } from "@/lib/utils";

import ThemeSwitcher from "../ThemeSwitcher";
import Section from "./Section";
import Button from "./Button";
import Heading from "./Heading";
import Text from "./Text";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
    Logo: ReactNode;
}

interface ColumnProps extends BasicComponentProps {
    title: string;
}

interface FooterLogoProps extends BasicComponentProps {
    Logo: ReactNode;
}

interface SocialProps {
    link: string;
}

export default function Footer({ Logo }: FooterProps) {
    return (
        <footer className="bg-clr-bg-extra-dark border-t py-10">
            <Section className="gap-10">
                <FooterTopContent Logo={Logo} />
                <FooterBottomContent />
            </Section>
        </footer>
    );
}

function FooterTopContent({ Logo }: FooterProps) {
    return (
        <Section.Content
            className={cn("flex w-full flex-col gap-16", "md:flex-row")}
        >
            <FooterCTA Logo={Logo} />
            <FooterNav />
        </Section.Content>
    );
}

function FooterBottomContent() {
    return (
        <Section.Content className="flex w-full flex-col-reverse items-center justify-between gap-5 sm:flex-row">
            <p className="text-clr-text-muted">
                &copy; {new Date().getFullYear()} KM-WebDev. Wszelkie prawa
                zastrzeżone.
            </p>

            <div className="flex gap-10">
                <div className="flex items-center gap-4">
                    <FooterSocial link="https://discord.com" />
                    <FooterSocial link="https://github.com/KM-WebDev" />
                </div>

                <ThemeSwitcher />
            </div>
        </Section.Content>
    );
}

function FooterCTA({ Logo }: FooterLogoProps) {
    return (
        <div
            className={cn(
                "bg-clr-bg-light border-clr-text/10 flex h-fit flex-col gap-5 rounded-xl border p-5",
                "md:max-w-sm"
            )}
        >
            <FooterLogo Logo={Logo} />
            <div className="flex flex-col gap-3">
                <Heading semantic="h6" text="Bezpłatny audyt twojej strony" />
                <Text semantic="p" muted>
                    Przeprowadzimy pełną inspekcję strony i pokażemy jak ją
                    usprawnić
                </Text>
                <Button text="Zamów teraz" className="w-fit" />
            </div>
        </div>
    );
}

function FooterLogo({ Logo }: FooterLogoProps) {
    if (!Logo) return <></>;

    return <Link href="/">{Logo}</Link>;
}

function FooterSocial({ link }: SocialProps) {
    const brand = getBrandFromUrl(link);

    return (
        <a href={link} className="h-5 w-5">
            <div
                className="h-full w-full"
                style={{
                    WebkitMaskImage: `url(https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@13.21.0/icons/${brand}.svg)`,
                    maskImage: `url(https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@13.21.0/icons/${brand}.svg)`,
                    background: "currentcolor",
                    backgroundSize: "cover",
                }}
            />
        </a>
    );
}

function FooterNav() {
    return (
        <div
            className={cn(
                "grid w-full grid-cols-1 gap-y-10",
                "sm:grid-cols-2",
                "lg:flex lg:flex-row lg:justify-between"
            )}
        >
            <Column title="Szybkie Linki">
                <FooterNavigation routes={routes} />
            </Column>
            <Column title="Informacje Prawne">
                <FooterNavigation routes={legalRoutes} />
            </Column>
            <Column title="Informacje Prawne">
                <FooterNavigation routes={legalRoutes} />
            </Column>
        </div>
    );
}

function Column({ title, children, className }: ColumnProps) {
    return (
        <div className={cn("flex w-fit flex-col gap-3", className)}>
            <Heading styling="h6" semantic="h6">
                {title}
            </Heading>

            {children}
        </div>
    );
}

function FooterNavigation({ routes }: { routes: NavigationRoutes }) {
    return (
        <ul className="flex flex-col gap-2">
            {routes.map((route) => (
                <li key={route.name}>
                    <Link
                        href={route.link}
                        className="transition-colors hover:text-sky-500"
                    >
                        {route.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

function getBrandFromUrl(url: string) {
    try {
        const { hostname } = new URL(url);
        return hostname.replace("www.", "").split(".")[0];
    } catch (e) {
        return "wordpress";
    }
}
