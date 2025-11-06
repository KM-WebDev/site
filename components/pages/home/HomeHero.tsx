import Button from "@/components/base/Button";
import { HeaderHeightPadding } from "@/components/base/Header.client";
import Heading from "@/components/base/Heading";
import Section from "@/components/base/Section";
import Text from "@/components/base/Text";
import Image from "next/image";

export default function HomeHero() {
    return (
        <Section className="bg-clr-bg-light py-size-xl" padded={false}>
            <HeaderHeightPadding />
            <Section.Content className="relative flex h-screen">
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
                <div className="mx-auto flex gap-4 text-sm tracking-wider">
                    <Button text="Zamów Audyt" variant="transparent" />
                    <Button text="Zakup Stronę" />
                </div>
                <div className="py-size-xl bg-clr-bg px-size-xl rounded-xl">
                    <div className="relative aspect-[4/4] w-full">
                        <Image
                            src={"/template-hero2.webp"}
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
