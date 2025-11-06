import Button from "@/components/base/Button";
import { HeaderHeightPadding } from "@/components/base/Header.client";
import Heading from "@/components/base/Heading";
import Section from "@/components/base/Section";
import Text from "@/components/base/Text";
import AnimatedContent from "@/third-party/react-bits/AnimatedContent";
import Image from "next/image";

export default function HomeHero() {
    return (
        <Section className="bg-clr-bg-light py-size-xl" padded={false}>
            <HeaderHeightPadding />
            <Section.Content className="relative flex h-screen">
                <AnimatedContent
                    distance={30}
                    direction="vertical"
                    reverse={false}
                    duration={0.7}
                    initialOpacity={0}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.3}
                >
                    <Heading
                        semantic="h1"
                        className="mx-auto max-w-3xl text-center lg:text-6xl"
                    >
                        Stwórz z nami nowoczesną stronę internetową
                    </Heading>
                </AnimatedContent>
                <AnimatedContent
                    distance={30}
                    direction="vertical"
                    reverse={false}
                    duration={0.7}
                    initialOpacity={0}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.6}
                >
                    <Text className="mx-auto max-w-3xl text-center" muted>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repudiandae vitae velit nobis aperiam a
                        exercitationem ea illum est ipsum corporis? Lorem ipsum
                        dolor, sit amet consectetur adipisicing elit. Sapiente,
                        dolor.
                    </Text>
                </AnimatedContent>
                <AnimatedContent
                    distance={30}
                    direction="vertical"
                    reverse={false}
                    duration={0.7}
                    initialOpacity={0}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.9}
                >
                    <div className="flex justify-center gap-4 text-sm tracking-wider">
                        <Button text="Zamów Audyt" variant="transparent" />
                        <Button text="Zakup Stronę" />
                    </div>
                </AnimatedContent>
                <AnimatedContent
                    distance={30}
                    direction="vertical"
                    reverse={false}
                    duration={0.7}
                    initialOpacity={0}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={1.2}
                >
                    <div className="p-size-sm bg-clr-bg-dark rounded-xl">
                        <div className="relative aspect-[4/4] w-full">
                            <Image
                                src={"/template-hero2.webp"}
                                fill
                                alt="hero"
                                className="object-contain"
                            />
                        </div>
                    </div>
                </AnimatedContent>
            </Section.Content>
        </Section>
    );
}
