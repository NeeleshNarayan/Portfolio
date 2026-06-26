import achievements from "../../data/achievements";

import AchievementBadge from "./AchievementBadge";

export default function AchievementGrid() {

    return (

        <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            mt-10
            "
        >

            {achievements.map((achievement) => (

                <AchievementBadge

                    key={achievement.id}

                    {...achievement}

                />

            ))}

        </div>

    );

}