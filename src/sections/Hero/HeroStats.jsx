import profile from "../../data/profile"


export default function HeroStats() {

    const stats = [

        {
            value: "400+",
            label: "Problems Solved"
        },

        {
            value: "15+",
            label: "Projects"
        },

        {
            value: "DSA",
            label: "Lead"
        }

    ];

    return (

        <div className="flex gap-8 mt-14">

            {stats.map((item) => (

                <div key={item.label}>

                    <h2 className="text-3xl font-bold text-white">

                        {item.value}

                    </h2>

                    <p className="text-gray-500">

                        {item.label}

                    </p>

                </div>

            ))}

        </div>

    );

}