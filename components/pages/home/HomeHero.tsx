import Button from "@/components/base/Button";
import { HeaderHeightPadding } from "@/components/base/Header.client";
import Heading from "@/components/base/Heading";
import Section from "@/components/base/Section";
import Text from "@/components/base/Text";
import { GridBackground } from "@/third-party/aceternity-ui/GridBackground";
import { Safari } from "@/third-party/magic-ui/Safari";
import { InView } from "@/third-party/motion-primitives/InView";

export default function HomeHero() {
    return (
        <Section className="bg-clr-bg-light py-size-xl relative">
            <HeaderHeightPadding />
            <GridBackground />
            <Section.Content className="gap-size-md relative flex">
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
                    transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
                    viewOptions={{ margin: "0px 0px 0px 0px" }}
                >
                    <Heading
                        semantic="h1"
                        className="mx-auto max-w-3xl text-center lg:text-6xl"
                    >
                        Stwórz z nami nowoczesną stronę internetową
                    </Heading>
                </InView>

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
                    viewOptions={{ margin: "0px 0px 0px 0px" }}
                >
                    <Text className="mx-auto max-w-3xl text-center" muted>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repudiandae vitae velit nobis aperiam a
                        exercitationem ea illum est ipsum corporis? Lorem ipsum
                        dolor, sit amet consectetur adipisicing elit. Sapiente,
                        dolor.
                    </Text>
                </InView>

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
                        delay: 0.4,
                    }}
                    viewOptions={{ margin: "0px 0px 0px 0px" }}
                >
                    <div className="flex justify-center gap-4 text-sm tracking-wider">
                        <Button text="zamów audyt" variant="opposite" />
                        <Button text="zakup stronę" />
                    </div>
                </InView>

                {/* <div className="p-size-xs rounded-[24px] bg-sky-800/30">
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                            <Image
                                src={"/test-hero.png"}
                                fill
                                alt="hero"
                                className="object-contain"
                            />
                        </div>
                    </div> */}
            </Section.Content>
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
                    delay: 0.6,
                }}
                viewOptions={{ margin: "0px 0px 0px 0px" }}
                className="px-size-sm pt-size-md flex w-full justify-center"
            >
                <Safari
                    url="https:\\"
                    imageSrc="/template-hero.webp"
                    className="max-w-7xl"
                />
            </InView>
        </Section>
    );
}
