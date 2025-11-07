import Heading from "@/components/base/Heading";
import Section from "@/components/base/Section";
import Text from "@/components/base/Text";
import { Iphone } from "@/third-party/magic-ui/Iphone";

export default function HomeMobileFirst() {
    return (
        <Section className="py-size-4xl">
            <Section.Content className="gap-size-xl">
                <div className="gap-size-sm mx-auto flex max-w-3xl flex-col text-center">
                    <Heading semantic="h2">
                        Projektuje responsywne strony internetowe
                    </Heading>
                    <Text className="">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quae hic alias illo eos dolor provident sequi
                        reiciendis quasi animi sunt delectus cum corporis
                        officia non quis sapiente enim, facere expedita? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit, repudiandae odit? Voluptatibus ipsam sit velit!
                    </Text>
                </div>

                <div className="gap-size-md flex h-full w-full">
                    <div className="gap-size-sm flex flex-col justify-center text-end">
                        <Heading styling="h1">2</Heading>
                        <Heading semantic="h3">Ogromny rynek mobilny</Heading>
                        <Text className="">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quae hic alias illo eos dolor provident sequi
                            reiciendis quasi animi sunt delectus cum corporis
                            officia non quis sapiente enim, facere expedita?
                        </Text>
                    </div>
                    <Iphone src="/strona.jpeg" className="max-w-md" />
                    <div className="flex flex-col justify-between">
                        <div className="gap-size-sm flex flex-col">
                            <Heading styling="h1">1</Heading>
                            <Heading semantic="h3">
                                Ogromny rynek mobilny
                            </Heading>
                            <Text className="">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quae hic alias illo eos dolor
                                provident sequi reiciendis quasi animi sunt
                                delectus cum corporis officia non quis sapiente
                                enim, facere expedita?
                            </Text>
                        </div>
                        <div className="gap-size-sm flex flex-col">
                            <Heading styling="h1">3</Heading>
                            <Heading semantic="h3">
                                Ogromny rynek mobilny
                            </Heading>
                            <Text className="">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quae hic alias illo eos dolor
                                provident sequi reiciendis quasi animi sunt
                                delectus cum corporis officia non quis sapiente
                                enim, facere expedita?
                            </Text>
                        </div>
                    </div>
                </div>
            </Section.Content>
        </Section>
    );
}
