const commands = {
    help: {
        description: "Show all available commands",
    },

    readme: {
        type: "file",
        target: "readme",
        description: "Open README.md",
    },

    projects: {
        type: "file",
        target: "projects",
        description: "Open Projects.jsx",
    },

    skills: {
        type: "file",
        target: "skills",
        description: "Open Skills.json",
    },

    contact: {
        type: "file",
        target: "contact",
        description: "Open Contact.sh",
    },

    clear: {
        type: "clear",
        description: "Clear terminal",
    },

    github: {
        type: "url",
        target: "https://github.com/NeeleshNarayan",
        description: "Open GitHub profile",
    },

    linkedin: {
        type: "url",
        target: "https://linkedin.com/in/YOUR_LINKEDIN",
        description: "Open LinkedIn profile",
    },

    resume: {
        type: "resume",
        description: "Download resume",
    },
};

export default commands;