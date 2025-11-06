import Heading from "@/components/base/Heading";
import Section from "@/components/base/Section";
import Text from "@/components/base/Text";
import SpotlightCard from "@/third-party/react-bits/SpotlightCard";
import * as motion from "motion/react-client";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiGrowth } from "react-icons/gi";
import { BsPlugin } from "react-icons/bs";
import { IoShieldCheckmark } from "react-icons/io5";
const spotlight = "rgba(0, 166, 244, 0.25)";

const cards = [
    {
        Icon: BsCurrencyDollar,
        title: "Niskie koszty utrzymania",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    },
    {
        Icon: HiMiniMagnifyingGlass,
        title: "SEO i wskaźniki wydajności",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    },
    {
        Icon: AiFillThunderbolt,
        title: "Szybki czas ładowania",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    },
    {
        Icon: GiGrowth,
        title: "Skalowanie i rozwój",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    },
    {
        Icon: BsPlugin,
        title: "Liczba wtyczek",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    },
    {
        Icon: IoShieldCheckmark,
        title: "Bezpieczeństwo ",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    },
];

export default function HomeTech() {
    return (
        <Section className="py-size-4xl">
            <Section.Content className="gap-size-xl">
                <div className="gap-size-sm flex max-w-2xl flex-col self-start">
                    <Heading
                        semantic="h2"
                        text="Co wyróżnia nasze strony internetowe od konkurencji?"
                    />
                    <Text muted>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, ipsum! Ex culpa deleniti odit quo dolor
                        voluptas porro, laboriosam maiores. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Deleniti dolorem
                        vero accusantium perspiciatis, quasi illum aliquam
                        dolores? Ut, neque. Non quam laudantium itaque et
                        nesciunt praesentium voluptas dolores. Ad, amet!
                    </Text>
                </div>

                <div className="gap-size-sm flex flex-col items-center">
                    <Heading styling="h3">
                        <span>wykorzystujemy technologie</span>{" "}
                        <Heading styling="h3" variant="primary">
                            Next.js
                        </Heading>
                    </Heading>

                    <div className="gap-size-sm grid auto-rows-fr grid-cols-3 items-stretch">
                        {cards.map((card, i) => {
                            return (
                                <SpotlightCard
                                    key={card.title + i}
                                    className="bg-clr-bg gap-size-xs group/card border-clr-bg-dark shadow-clr-bg-extra-dark flex flex-col border-4 shadow-lg duration-300 hover:border-sky-500/30 hover:shadow-sky-500/30"
                                    spotlightColor={spotlight}
                                >
                                    <div className="bg-clr-bg-dark w-fit rounded-lg p-1 transition-colors duration-300 group-hover/card:bg-sky-500/40">
                                        <card.Icon className="text-clr-text-extra-muted text-7xl transition-colors duration-300 group-hover/card:text-white" />
                                    </div>
                                    <Heading semantic="h3" text={card.title} />
                                    <Text
                                        text={card.text}
                                        className="leading-normal"
                                        muted
                                    />
                                </SpotlightCard>
                            );
                        })}
                    </div>
                </div>
            </Section.Content>
        </Section>
    );
}
