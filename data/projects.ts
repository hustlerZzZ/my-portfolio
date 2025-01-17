export type projectType = {
  project_name: string;
  project_description: string;
  skills: string[];
  image_url: string;
  github_url: string;
  live_url: string | undefined;
};

export const projects: projectType[] = [
  {
    project_name: "",
    project_description: "",
    skills: [],
    image_url: "",
    github_url: "",
    live_url: "",
  },
  {
    project_name: "Social Media App",
    project_description:
      "A social media app enables users to connect, share content, and interact through posts, likes, comments, and messaging. It fosters community engagement with features like profiles, media sharing, and real-time notifications.",
    skills: [
      "React JS",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    image_url: "",
    github_url: "",
    live_url: "",
  },
  {
    project_name: "Indie Hunar | Freelancing platform",
    project_description:
      "A freelance platform connects clients and freelancers, enabling them to collaborate on projects. It offers features like job postings, profile creation, secure payments, chat, and contract management to streamline hiring and project execution.",
    skills: [
      "Next JS",
      "Tailwind CSS",
      "Next Auth",
      "Supabase",
      "Chart JS",
      "Bcrypt JS",
      "GSAP",
      "Framer",
    ],
    image_url: "",
    github_url: "https://github.com/hustlerZzZ/freelancer",
    live_url: "https://freelancer-ruddy.vercel.app/",
  },
  {
    project_name: "Todo Full Stack Web App",
    project_description:
      "A full-stack Todo web app is a task management platform that allows users to create, edit, delete, and organize their daily tasks. It features a user-friendly interface, real-time updates, and secure data storage using modern front-end and back-end technologies.",
    skills: [
      "React JS",
      "Tailwind CSS",
      "Recoil JS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    image_url: "",
    github_url: "https://github.com/hustlerZzZ/todo-fullstack",
    live_url: "",
  },
  {
    project_name: "Discord Clone",
    project_description:
      "A Discord clone is a real-time chat application that replicates key features of Discord, such as text and voice channels, user authentication, server creation, and live messaging. It is built to provide seamless communication for communities, teams, or social groups.",
    skills: ["React JS", "Tailwind CSS"],
    image_url: "",
    github_url: "https://github.com/hustlerZzZ/discord-clone",
    live_url: "https://discord-clone-six-sigma.vercel.app/",
  },
];
