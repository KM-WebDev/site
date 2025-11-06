import Button from "@/components/base/Button";
import { HeaderHeightPadding } from "@/components/base/Header.client";
import Heading from "@/components/base/Heading";
import Section from "@/components/base/Section";
import Text from "@/components/base/Text";
import { GridBackground } from "@/third-party/aceternity-ui/GridBackground";
import Image from "next/image";

export default function HomeHero() {
    return (
        <Section className="bg-clr-bg-light py-size-xl relative">
            <HeaderHeightPadding />
            <GridBackground />
            <Section.Content className="gap-size-md relative flex">
                <Heading
                    semantic="h1"
                    className="mx-auto max-w-3xl text-center lg:text-6xl"
                >
                    Stwórz z nami nowoczesną stronę internetową
                </Heading>

                <Text className="mx-auto max-w-3xl text-center" muted>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repudiandae vitae velit nobis aperiam a exercitationem ea
                    illum est ipsum corporis? Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Sapiente, dolor.
                </Text>

                <div className="flex justify-center gap-4 text-sm tracking-wider">
                    <Button text="zamów audyt" variant="opposite" />
                    <Button text="zakup stronę" />
                </div>

                <div className="p-size-xs rounded-[24px] bg-sky-800/30">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                        <Image
                            src={"/test-hero.png"}
                            fill
                            alt="hero"
                            className="object-contain"
                        />
                    </div>
                </div>
            </Section.Content>
        </Section>
    );
}
