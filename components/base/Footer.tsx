// import {
//     routes as mainRoutes,
//     legalRoutes,
//     NavigationRoutes,
// } from "@/app/routes";

// import SectionHeading from "./SectionHeading";
// import { BasicComponentProps } from "@/lib/types/global";
// import Section from "./Section";
// import Heading from "./Heading";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import Button from "./Button";

// interface SocialFooterProps extends BasicComponentProps {
//     socials: string[];
// }

// interface ColumnProps extends BasicComponentProps {
//     title: string;
// }

// export default function Footer({ socials }: SocialFooterProps) {
//     return (
//         <footer>
//             <FooterCTA />
//             <FooterBottom socials={socials} />
//         </footer>
//     );
// }

// function FooterCTA() {
//     return (
//         <Section className="z-10000 bg-white text-zinc-800">
//             <Section.Content className="items-center gap-4">
//                 <SectionHeading
//                     number="06"
//                     heading="Masz pomysł na nowy projekt?"
//                     text="Pomogę Ci stworzyć logo, które wyróżni Twoją markę na tle konkurencji."
//                 />
//                 <Button href="/kontakt" as="link">
//                     Zacznij projekt
//                 </Button>
//             </Section.Content>
//         </Section>
//     );
// }

// function FooterBottom({ socials }: SocialFooterProps) {
//     return (
//         <div className="bg-zinc-100 text-zinc-700">
//             <FooterNaviagtion socials={socials} />
//             <div
//                 className={cn(
//                     "relative flex flex-col items-center gap-2 border-t border-zinc-300 px-6 py-4 text-sm text-zinc-500",
//                     "lg:flex-row lg:justify-center"
//                 )}
//             >
//                 <p className="text-center">
//                     &copy; {new Date().getFullYear()} Anastazja Mokwa. Wszelkie
//                     prawa zastrzeżone.
//                 </p>

//                 <p
//                     className={cn(
//                         "text-center",
//                         "md:text-right",
//                         "lg:absolute lg:right-6"
//                     )}
//                 >
//                     Strona wykonana przez{" "}
//                     <span className="text-clr-brand-red font-medium transition-colors">
//                         KM-WebDev
//                     </span>
//                 </p>
//             </div>
//         </div>
//     );
// }

// function FooterNaviagtion({ socials }: SocialFooterProps) {
//     return (
//         <div
//             className={cn(
//                 "mx-auto grid max-w-3xl grid-cols-1 gap-10 px-10 py-12",
//                 "sm:grid-cols-3 sm:px-12"
//             )}
//         >
//             <Column className="gap-2" title="Szybkie linki">
//                 <FooterLinks routes={mainRoutes} />
//             </Column>
//             <Column className="gap-4" title="Kontakt">
//                 <div className="flex flex-col gap-2 text-sm text-zinc-600">
//                     <a
//                         href="mailto:kontakt@jankowalski.pl"
//                         className="hover:text-clr-brand-red w-fit transition-colors"
//                     >
//                         kontakt@jankowalski.pl
//                     </a>
//                     Gdańsk, Polska
//                 </div>
//                 <div className="flex gap-4 text-xl text-zinc-700">
//                     <Socials socials={socials} />
//                 </div>
//             </Column>
//             <Column className="gap-2" title="Informacje prawne">
//                 <FooterLinks routes={legalRoutes} />
//             </Column>
//         </div>
//     );
// }

// function Column({ title, children, className }: ColumnProps) {
//     return (
//         <div className={cn("flex flex-col", className)}>
//             <Heading
//                 styling="h6"
//                 semantic="h6"
//                 className="text-sm text-zinc-800 uppercase"
//             >
//                 {title}
//             </Heading>

//             {children}
//         </div>
//     );
// }

// function FooterLinks({ routes }: { routes: NavigationRoutes }) {
//     return (
//         <ul className="flex flex-col gap-2 text-sm capitalize">
//             {routes.map((route) => {
//                 if (route.cta) {
//                     return;
//                 }

//                 return (
//                     <li key={route.name}>
//                         <Link
//                             href={route.link}
//                             className="hover:text-clr-brand-red cursor-pointer text-zinc-600"
//                         >
//                             {route.name}
//                         </Link>
//                     </li>
//                 );
//             })}
//         </ul>
//     );
// }
