import AboutSection from "./AboutSection";
import TechStackSection from "./TechStackSection";
import JourneySection from "./JourneySection";
import FocusSection from "./FocusSection";
import ConnectSection from "./ConnectSection";
import AchievementGrid from "../../components/common/AchievementGrid";

export default function README() {
    return (
        <div className="max-w-5xl mx-auto py-10 px-8">

            <AboutSection />

            <AchievementGrid />

            <TechStackSection />

            <JourneySection />

            <FocusSection />

            <ConnectSection />

        </div>
    );
}