export type projectType = {
  project_name: string;
  project_description: string;
  skills: string[];
  image_url?: string;
  github_url: string;
  live_url: string;
};

export const projectData: projectType[] = [
  {
    project_name: "Url Shortener",
    project_description:
      "A URL shortener is a web application that converts long URLs into concise, easy-to-share links. It provides analytics for tracking link performance and ensures efficient redirection while enhancing user convenience.",
    skills: ["Pug JS", "SCSS", "Node.js", "Express.js", "MySQL"],
    github_url: "https://github.com/hustlerZzZ/url-shortner",
    live_url: "",
  },
  {
    project_name: "unveiled.in",
    project_description:
      "A backend project offering robust authentication packages and pre-built UI components for seamless user sign-up, login, and authentication workflows. Designed for developers, it simplifies integration while ensuring security and scalability.",
    skills: ["React JS", "Tailwind CSS", "Node.js", "Express.js", "Prisma"],
    github_url: "https://github.com/unveiled-labs/unveiled.in",
    live_url: "",
  },
  {
    project_name: "BuySutra",
    project_description:
      "Buy Sutra is an eCommerce web app designed to provide a seamless shopping experience with features like product browsing, secure checkout, user authentication, and order tracking. It combines intuitive design with robust functionality to simplify online shopping.",
    skills: [
      "React JS",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Express.js",
      "MySQL",
    ],
    github_url: "https://github.com/hustlerZzZ/BuySutra",
    live_url: "",
  },
  {
    project_name: "FurFinders",
    project_description:
      "FurFinders is a web app dedicated to reuniting lost pets with their owners. Users can post details of lost or found animals, share photos, and connect with the community to help bring furry friends back home.",
    skills: [
      "React JS",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Express.js",
      "MySQL",
    ],
    github_url: "https://github.com/hustlerZzZ/furfinders",
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
    github_url: "https://github.com/hustlerZzZ/social-media-app",
    live_url: "",
  },
  {
    project_name: "Indie Hunar",
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
    github_url: "https://github.com/hustlerZzZ/todo-fullstack",
    live_url: "",
  },
  {
    project_name: "Discord Clone",
    project_description:
      "A Discord clone is a real-time chat application that replicates key features of Discord, such as text and voice channels, user authentication, server creation, and live messaging. It is built to provide seamless communication for communities, teams, or social groups.",
    skills: ["React JS", "Tailwind CSS"],
    github_url: "https://github.com/hustlerZzZ/discord-clone",
    live_url: "https://discord-clone-six-sigma.vercel.app/",
  },
  {
    project_name: "Swipe Clone",
    project_description:
      "A Swipe UI clone replicates the sleek and interactive design of the Swipe app using only HTML and CSS. It focuses on responsive layouts, smooth transitions, and visually appealing elements to provide an authentic look and feel.",
    skills: ["HTML", "CSS"],
    github_url: "https://github.com/hustlerZzZ/swipe",
    live_url: "https://hustlerzzz.github.io/swipe/",
  },
  {
    project_name: "Aesthetic GYM",
    project_description:
      "Aesthetic GYM is a modern and visually appealing website built using HTML, CSS, and JavaScript for a local gym. It features an intuitive design, interactive elements, and responsive layouts to showcase gym services, schedules, and membership plans effectively.",
    skills: ["HTML", "CSS", "JS"],
    github_url: "https://github.com/hustlerZzZ/astheticgym",
    live_url: "",
  },
];
