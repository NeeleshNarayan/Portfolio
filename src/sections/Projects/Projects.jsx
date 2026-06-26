import projects from "../../data/projects";
console.log(projects)

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-10">

      <h1 className="text-5xl font-bold text-white mb-10">
        📁 Projects
      </h1>

      <div className="space-y-8">

        {projects.map((project) => (

          <div
            key={project.id}
            className="
              border
              border-[#2D2D30]
              rounded-lg
              bg-[#161B22]
              p-6
            "
          >

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-bold text-white">
                {project.title}
              </h2>

              <span
                className="
                  text-xs
                  bg-blue-600
                  px-3
                  py-1
                  rounded-full
                "
              >
                {project.status}
              </span>

            </div>

            <p className="text-gray-400 mt-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">

              {project.tech.map((tech) => (

                <span
                  key={tech}
                  className="
                    px-3
                    py-1
                    rounded
                    bg-[#0D1117]
                    text-blue-400
                    text-sm
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

            <div className="flex gap-4 mt-6">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-green-400 hover:underline"
              >
                Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}