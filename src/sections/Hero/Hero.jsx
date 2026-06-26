import HeroLeft from "../Hero/HeroLeft";
import HeroRight from "../Hero/HeroRight";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center px-10 bg-black">

            <div className="mx-auto grid max-w-7xl w-full grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                <HeroLeft />

                <HeroRight />

            </div>

        </section>
    );
}