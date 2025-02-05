export type experienceType = {
  company_name: string;
  description: string[];
  role: string;
  location: string;
  duration: string;
  image_url: string;
  skills: string[];
};

// Define the experience data
export const experienceData: experienceType[] = [
  {
    company_name: "Viben",
    description: [
      "Developed the backend from scratch, designing and implementing a robust API that serves as the foundation for a mobile app, ensuring efficient data handling and seamless integration.",
    ],
    role: "SDE | Intern",
    location: "Remote, India",
    duration: "Feb 2025 - Present",
    image_url: "",
    skills: [
      "JavaScript",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "React JS",
      "Next JS",
      "Node JS",
      "Express.js",
      "MySQL",
    ],
  },
  {
    company_name: "The Morons", // Fixed typo here
    description: [
      "Contributed to the development and deployment of scalable web applications by building and optimizing front-end and back-end components.",
      "Played a key role in the development and improvement of the mobile app by leveraging React Native, ensuring cross-platform functionality and a smooth, user-friendly experience.",
    ],
    role: "Full Stack | Intern",
    location: "Remote, India",
    duration: "Dec 2024 - Feb 2025",
    image_url: "",
    skills: [
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "React JS",
      "Next JS",
      "Node JS",
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
      "Through hands-on mentorship, I empowered hundreds of students to master full-stack development, equipping them with the skills, confidence, and knowledge to make meaningful contributions to the open-source community and excel in real-world projects.",
      "Recognized among the Top 3 mentors for exceptional guidance and support during the Girl-Script Summer of Code program.",
    ],
    role: "Mentor | Full Stack Dev",
    location: "Remote, India",
    duration: "May 2024 - Aug 2024",
    image_url: "",
    skills: [
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "React JS",
      "Next JS",
      "Node JS",
      "SQL",
      "MongoDB",
    ],
  },
  {
    company_name: "Career-Width",
    description: [
      "Empowered 20 students with personalized portfolio websites, a catalyst for their successful admission into international colleges.",
      "Enhanced website performance and SEO by optimizing JavaScript and implementing key features such as lazy loading, image compression, and improved meta descriptions, resulting in a 10% increase in website speed and significantly boosting search engine visibility.",
    ],
    role: "Front End | Intern",
    location: "New Delhi, India",
    duration: "Mar 2023 - July 2023",
    image_url: "",
    skills: ["HTML", "CSS", "SCSS", "Tailwind CSS", "JavaScript", "React JS"],
  },
];
