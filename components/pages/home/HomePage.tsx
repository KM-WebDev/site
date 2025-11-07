import HomeHero from "./HomeHero";
import HomeMobileFirst from "./HomeMobileFirst";
import HomeTech from "./HomeTech";
import HomeTest from "./HomeTest";
import HomeWordpress from "./HomeWordpress";

export default function HomePage() {
    return (
        <>
            <HomeHero />
            <HomeTech />
            <HomeWordpress />
            <HomeMobileFirst />
            <HomeTest />
        </>
    );
}
