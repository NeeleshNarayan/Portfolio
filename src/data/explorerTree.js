const explorer = [
  {
    id: "src",
    name: "src",
    type: "folder",
    children: [
      {
        id: "sections",
        name: "sections",
        type: "folder",
        children: [
          {
            id: "readme",
            name: "README.md",
            type: "file",
            fileType: "readme",
            extension: "md",
          },
          {
            id: "projects",
            name: "Projects.jsx",
            type: "file",
            fileType: "projects",
            extension: "jsx",
          },
          {
            id: "skills",
            name: "Skills.json",
            type: "file",
            fileType: "skills",
            extension: "json",
          },
          {
            id: "contact",
            name: "Contact.sh",
            type: "file",
            fileType: "contact",
            extension: "sh",
          },
        ],
      },

      {
        id: "assets",
        name: "assets",
        type: "folder",
        children: [],
      },

      {
        id: "public",
        name: "public",
        type: "folder",
        children: [],
      },
    ],
  },
];

export default explorer;