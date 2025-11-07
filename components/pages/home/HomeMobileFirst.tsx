import Heading from "@/components/base/Heading";
import Section from "@/components/base/Section";
import Text from "@/components/base/Text";
import { Iphone } from "@/third-party/magic-ui/Iphone";
import { Tilt } from "@/third-party/motion-primitives/Tilt";

export default function HomeMobileFirst() {
    return (
        <Section className="py-size-4xl">
            <Section.Content className="gap-size-xl">
                <div className="gap-size-sm mx-auto flex max-w-3xl flex-col text-center">
                    <Heading semantic="h2">
                        Projektujemy responsywne strony internetowe
                    </Heading>
                    <Text muted>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quae hic alias illo eos dolor provident sequi
                        reiciendis quasi animi sunt delectus cum corporis
                        officia non quis sapiente enim, facere expedita? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit, repudiandae odit? Voluptatibus ipsam sit velit!
                    </Text>
                </div>

                <div className="gap-size-md flex h-full w-full flex-col max-xl:items-center xl:flex-row">
                    <div className="gap-size-xs flex flex-col justify-center xl:text-end">
                        <Heading styling="h1" className="max-xl:hidden">
                            2
                        </Heading>
                        <Heading styling="h1" className="xl:hidden">
                            1
                        </Heading>
                        <Heading semantic="h3">Ogromny rynek mobilny</Heading>
                        <Text muted>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quae hic alias illo eos dolor provident sequi
                            reiciendis quasi animi sunt delectus cum corporis
                            officia non quis sapiente enim, facere expedita?
                        </Text>
                    </div>
                    <Tilt
                        rotationFactor={6}
                        isRevese
                        style={{
                            transformOrigin: "center center",
                        }}
                        springOptions={{
                            stiffness: 26.7,
                            damping: 4.1,
                            mass: 0.2,
                        }}
                        className="group relative h-full w-full max-w-md rounded-lg max-xl:-order-1"
                    >
                        <Iphone src="/strona.jpeg" className="" />
                    </Tilt>
                    <div className="gap-size-md flex flex-col justify-between">
                        <div className="gap-size-xs flex flex-col">
                            <Heading styling="h1" className="max-xl:hidden">
                                1
                            </Heading>
                            <Heading styling="h1" className="xl:hidden">
                                2
                            </Heading>
                            <Heading semantic="h3">
                                Ogromny rynek mobilny
                            </Heading>
                            <Text muted>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quae hic alias illo eos dolor
                                provident sequi reiciendis quasi animi sunt
                                delectus cum corporis officia non quis sapiente
                                enim, facere expedita?
                            </Text>
                        </div>
                        <div className="gap-size-xs flex flex-col">
                            <Heading styling="h1">3</Heading>
                            <Heading semantic="h3">
                                Ogromny rynek mobilny
                            </Heading>
                            <Text muted>
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
