export type experienceType = {
  company_name: string;
  description: string[];
  role: string;
  location: string;
  duration: string;
  image_url: string;
  skills: string[];
};

export const experienceData: experienceType[] = [
  {
    company_name: "The Moronss",
    description: [
      "Contributed to the development and deployment of scalable web applications by building and optimizing front-end\n" +
        "and back-end components.",
    ],
    role: "Full Stack | Intern",
    location: "Remote, India",
    duration: "Dec 2024 - Present",
    image_url: "",
    skills: [
      "Javascript",
      "TypeScript",
      "Tailwind CSS",
      "React Js",
      "Next Js",
      "Node Js",
      "Express.js",
      "Mongoose",
      "MySQL",
      "MongoDB",
      "React Native",
    ],
  },
  {
    company_name: "Girl-Script Summer of Code",
    description: [
      "Through hands-on mentorship, I empowered 100’s of students to master full-stack development, equipping them\n" +
        "with the skills, confidence, and knowledge to make meaningful contributions to the open-source community and\n" +
        "excel in real-world projects.",
      "Recognized among the Top 3 mentors for exceptional guidance and support during the Girl-Script Summer of Code\n" +
        "program.",
    ],
    role: "Mentor | Full Stack Dev",
    location: "Remote, India",
    duration: "May 2024 - Aug 2024",
    image_url: "",
    skills: [
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "React Js",
      "Next Js",
      "Node Js",
      "SQL",
      "MongoDB",
    ],
  },
  {
    company_name: "Career-Width",
    description: [
      "Empowered 20 students with personalized portfolio websites, a catalyst for their successful admission into\n" +
        "international colleges.",
      "Enhanced website performance and SEO by optimizing JavaScript and implementing key features such as lazy\n" +
        "loading, image compression, and improved meta descriptions, resulting in a 10% increase in website speed and\n" +
        "significantly boosting search engine visibility.",
    ],
    role: "Front End | Intern",
    location: "New Delhi, India",
    duration: "Mar 2023 - July 2023",
    image_url: "",
    skills: ["HTML", "CSS", "SCSS", "Tailwind CSS", "JavaScript", "React JS"],
  },
];
