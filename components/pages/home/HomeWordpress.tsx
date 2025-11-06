import Heading from "@/components/base/Heading";
import Section from "@/components/base/Section";
import Text from "@/components/base/Text";
import { BasicComponentProps } from "@/lib/types/global";
import { cn } from "@/lib/utils";
import { BsPlugin } from "react-icons/bs";
import { GoShieldLock } from "react-icons/go";
import { MdSpeed } from "react-icons/md";
import { IoPricetagOutline, IoRocketOutline } from "react-icons/io5";
import { AiOutlineRise } from "react-icons/ai";
type Point = {
    title: string;
    text: string;
};
const prosList = [
    {
        title: "Ponad 3x szybsze ładowanie",
        text: "Strony w Next.js ładują się średnio w 0.5–1.5 s — dla WordPressa typowy wynik to 3–5 s.",
    },
    {
        title: "Stabilność i bezpieczeństwo",
        text: "Brak wtyczek i przestarzałego PHP oznacza mniej podatności.",
    },
    {
        title: "Lepsze SEO i wynik Lighthouse",
        text: "Strony w Next.js osiągają 90+ pkt w Google Lighthouse, co przekłada się na lepsze wyniki SEO.",
    },
    {
        title: "Niższe koszty utrzymania",
        text: "Hosting na Vercel lub Netlify to często 0 zł miesięcznie. Żadnych aktualizacji, backupów czy awarii po update pluginu.",
    },
    {
        title: "Skalowalność i elastyczność",
        text: "Next.js jest używany przez firmy takie jak Netflix, TikTok czy Uber. Umożliwia łatwe rozszerzanie strony o nowe funkcje i integracje.",
    },
];

const consList = [
    {
        title: "Wolne działanie",
        text: "Ciężkie motywy i wtyczki spowalniają stronę, co wpływa negatywnie na konwersję i SEO.",
    },
    {
        title: "Konflikty wtyczek",
        text: "Aktualizacja jednej wtyczki potrafi zepsuć działanie całej strony. Naprawy zajmują godziny, czasem dni.",
    },
    {
        title: "Ryzyko ataków",
        text: "WordPress to najczęściej atakowany CMS na świecie. Regularne aktualizacje są konieczne, ale nie zawsze wystarczają.",
    },
    {
        title: "Koszty serwisu",
        text: "Co kilka miesięcy potrzebne są poprawki, aktualizacje, kopie zapasowe i optymalizacje — to rośnie z czasem.",
    },
    {
        title: "Ograniczona skalowalność",
        text: "Wtyczki i motywy trudno rozbudowywać. Każda zmiana oznacza dodatkowe koszty lub ryzyko błędów.",
    },
];

const categoryList = [
    { icon: MdSpeed, name: "szybkość" },
    { icon: BsPlugin, name: "wtyczki" },
    { icon: IoRocketOutline, name: "pozycjonowanie" },
    { icon: IoPricetagOutline, name: "koszty" },
    { icon: AiOutlineRise, name: "skalowalność" },
];

export default function HomeWordpress() {
    return (
        <Section className="py-size-xl">
            <Section.Content className="gap-size-2xl">
                <div className="gap-size-sm flex max-w-3xl flex-col">
                    <Heading semantic="h2">
                        <span className="text-sky-700">Next.js</span> vs
                        Wordpress i inne buildery stron
                    </Heading>

                    <Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Explicabo obcaecati mollitia ipsa libero minus
                        repellat pariatur facilis assumenda eaque rem dolores,
                        cum laborum expedita nisi, harum culpa quam corporis
                        voluptatem!
                    </Text>
                </div>

                <div className="flex flex-col">
                    <div className="flex w-full justify-between">
                        <Heading semantic="h3">Next.js</Heading>
                        <Heading semantic="h3">Wordpress</Heading>
                    </div>
                    <Table />
                </div>
            </Section.Content>
        </Section>
    );
}

function Table() {
    return (
        <div className="gap-size-md flex flex-col">
            {prosList.map((pros, i) => {
                const cons = consList[i];
                const Icon = categoryList[i].icon;

                return (
                    <div key={pros.title} className="gap-size-xs flex flex-col">
                        <Heading
                            semantic="h4"
                            text={categoryList[i].name}
                            className="text-center"
                            muted
                        />
                        <div className="gap-size-lg bg-clr-bg-dark grid grid-cols-[1fr_auto_1fr] rounded-2xl">
                            <Pros point={pros} />
                            <div className="flex flex-col items-center justify-center">
                                <Icon className="text-clr-text-extra-muted text-6xl" />
                            </div>
                            <Cons point={cons} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

function Pros({ point }: { point: Point }) {
    return (
        <Point className="border-green-500/20 bg-green-200/30">
            <Heading semantic="h4" styling="h3" text={point.title} />
            <Text text={point.text} className="leading-normal" muted />
        </Point>
    );
}

function Cons({ point }: { point: Point }) {
    return (
        <Point className="border-red-500/20 bg-red-200/30">
            <Heading semantic="h4" styling="h3" text={point.title} />
            <Text text={point.text} className="leading-normal" muted />
        </Point>
    );
}

function Point({ children, className }: BasicComponentProps) {
    return (
        <div
            className={cn(
                "p-size-sm gap-size-xs flex flex-col rounded-2xl border-4",
                className
            )}
        >
            {children}
        </div>
    );
}
