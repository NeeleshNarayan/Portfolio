import HeroLeft from "../Hero/HeroLeft";
import HeroRight from "../Hero/HeroRight";

export default function Hero() {
    return (
        <section className="min-h-[calc(100vh-48px)] flex items-center px-10">

            <div className="mx-auto grid max-w-7xl w-full grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                <HeroLeft />

                <HeroRight />

            </div>

        </section>
    );
}