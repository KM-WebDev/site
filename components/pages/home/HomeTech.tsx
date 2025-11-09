import Heading from "@/components/base/Heading";
import Section from "@/components/base/Section";
import Text from "@/components/base/Text";
import SpotlightCard from "@/third-party/react-bits/SpotlightCard";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiGrowth } from "react-icons/gi";
import { BsPlugin } from "react-icons/bs";
import { IoShieldCheckmark } from "react-icons/io5";
import { InView } from "@/third-party/motion-primitives/InView";
import { TextShimmer } from "@/third-party/motion-primitives/TextShimmer";
import { Highlighter } from "@/third-party/magic-ui/Highlither";

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

const spotlight = "rgba(0, 166, 244, 0.25)";
export default function HomeTech() {
    return (
        <Section className="py-size-4xl bg-clr-bg-light">
            <Section.Content className="gap-size-xl">
                <div className="gap-size-sm mx-auto flex max-w-3xl flex-col text-center">
                    {/* <InView
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 30,
                                scale: 0.95,
                                filter: "blur(4px)",
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                filter: "blur(0px)",
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0,
                        }}
                        viewOptions={{ margin: "0px 0px -50px 0px" }}
                        once={true}
                    > */}
                    <Heading semantic="h2">
                        Co wyróżnia{" "}
                        <Highlighter color="var(--color-sky-300)" isView={true}>
                            nasze strony
                        </Highlighter>{" "}
                        internetowe od konkurencji?
                    </Heading>
                    {/* </InView> */}
                    <InView
                        once={true}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 30,
                                scale: 0.95,
                                filter: "blur(4px)",
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                filter: "blur(0px)",
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.2,
                        }}
                        viewOptions={{ margin: "0px 0px -50px 0px" }}
                    >
                        <Text muted>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eveniet, ipsum! Ex culpa deleniti odit quo
                            dolor voluptas porro, laboriosam maiores. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Deleniti dolorem vero accusantium perspiciatis,
                            quasi illum aliquam dolores? Ut, neque. Non quam
                            laudantium itaque et nesciunt praesentium voluptas
                            dolores. Ad, amet!
                        </Text>
                    </InView>
                </div>

                <div className="gap-size-sm flex flex-col items-center">
                    <InView
                        once={true}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 30,
                                scale: 0.95,
                                filter: "blur(4px)",
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                filter: "blur(0px)",
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.2,
                        }}
                        viewOptions={{ margin: "0px 0px -50px 0px" }}
                    >
                        <Heading
                            styling="h3"
                            className="text-center max-sm:flex max-sm:flex-wrap max-sm:justify-center"
                        >
                            <span>wykorzystujemy technologie</span>{" "}
                            <TextShimmer
                                as="span"
                                className="text-center [--base-color:var(--color-sky-500)] [--base-gradient-color:var(--color-sky-300)]"
                            >
                                Next.js
                            </TextShimmer>
                        </Heading>
                    </InView>

                    <div className="gap-size-sm md:gap-size-md grid auto-rows-fr items-stretch md:grid-cols-2 xl:grid-cols-3">
                        {cards.map((card, i) => {
                            return (
                                <InView
                                    key={card.title + i}
                                    once={true}
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            scale: 0.2,
                                            filter: "blur(4px)",
                                        },
                                        visible: {
                                            opacity: 1,
                                            scale: 1,
                                            filter: "blur(0px)",
                                        },
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                        delay: 0.1 * (i % 3),
                                    }}
                                    viewOptions={{
                                        margin: "0px 0px 0px 0px",
                                    }}
                                >
                                    <SpotlightCard
                                        className="bg-clr-bg p-size-sm lg:p-size-md gap-size-xs group/card border-clr-bg-dark shadow-clr-bg-extra-dark flex flex-col border-4 shadow-md duration-300 hover:border-sky-500/30 hover:shadow-sky-500/30 sm:shadow-lg dark:shadow-none"
                                        spotlightColor={spotlight}
                                    >
                                        <div className="bg-clr-bg-dark w-fit rounded-lg p-1 transition-colors duration-300 group-hover/card:bg-sky-500/40">
                                            <card.Icon className="text-clr-text-extra-muted text-5xl transition-colors duration-300 group-hover/card:text-white md:text-5xl xl:text-6xl" />
                                        </div>
                                        <Heading
                                            semantic="h3"
                                            text={card.title}
                                        />
                                        <Text
                                            text={card.text}
                                            className="leading-normal"
                                            muted
                                        />
                                    </SpotlightCard>
                                </InView>
                            );
                        })}
                    </div>
                </div>
            </Section.Content>
        </Section>
    );
}
