export interface NavigationRoutesEntry {
    name: string;
    link: string;
    exact?: boolean;
    cta?: boolean;
    subRoutes?: NavigationRoutesEntry[];
}

export type NavigationRoutesEntryWithSubRoutes = Omit<
    NavigationRoutesEntry,
    "subRoutes"
> & {
    subRoutes: NavigationRoutesEntry[];
};

export type NavigationRoutes = NavigationRoutesEntry[];

export const routes: NavigationRoutes = [
    { name: "Strona Główna", link: "/" },
    { name: "o nas", link: "/about" },
    { name: "portfolio", link: "/portfolio" },
    {
        name: "Usługi",
        link: "/services",
        subRoutes: [
            { name: "strona internetowa", link: "/services/site" },
            { name: "sklep internetowy", link: "/services/shop" },
        ],
    },
    { name: "Kontakt", link: "/contact" },

    // { name: "Strona Główna", link: "/" },
    // { name: "o nas", link: "/about" },
    // { name: "portfolio", link: "/portfolio" },
    // {
    //     name: "Usługi",
    //     link: "/services",
    //     subRoutes: [
    //         { name: "strona internetowa", link: "/services/site" },
    //         { name: "sklep internetowy", link: "/services/shop" },
    //     ],
    // },
    // { name: "Kontakt", link: "/contact" },
    // { name: "Strona Główna", link: "/" },
    // { name: "o nas", link: "/about" },
    // { name: "portfolio", link: "/portfolio" },
    // {
    //     name: "Usługi",
    //     link: "/services",
    //     subRoutes: [
    //         { name: "strona internetowa", link: "/services/site" },
    //         { name: "sklep internetowy", link: "/services/shop" },
    //     ],
    // },
    // { name: "Kontakt", link: "/contact" },
    // { name: "Strona Główna", link: "/" },
    // { name: "o nas", link: "/about" },
    // { name: "portfolio", link: "/portfolio" },
    // {
    //     name: "Usługi",
    //     link: "/services",
    //     subRoutes: [
    //         { name: "strona internetowa", link: "/services/site" },
    //         { name: "sklep internetowy", link: "/services/shop" },
    //     ],
    // },
    // { name: "Kontakt", link: "/contact" },
    // { name: "Strona Główna", link: "/" },
    // { name: "o nas", link: "/about" },
    // { name: "portfolio", link: "/portfolio" },
    // {
    //     name: "Usługi",
    //     link: "/services",
    //     subRoutes: [
    //         { name: "strona internetowa", link: "/services/site" },
    //         { name: "sklep internetowy", link: "/services/shop" },
    //     ],
    // },
    // { name: "Kontakt", link: "/contact" },
];

export const legalRoutes: NavigationRoutes = [
    { name: "Polityka Prywatności", link: "/privacy" },
    { name: "Warunki korzystania z usługi", link: "/tos" },
];
