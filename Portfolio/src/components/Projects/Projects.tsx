import styles from "./Projects.module.css";
import ProjectCard from "../ProjectCard/ProjectCard.tsx";
function Projects() {
  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.textBox}>
        <h2 className={styles.heading}>My Projects</h2>
        <p className={styles.subHeading}>
          I have worked on a wide range of projects. From static websites to web
          apps. Here are some of my projects.
        </p>
      </div>
      <div className={styles.cards}>
        <ProjectCard
          imgUrl="6"
          about="Created a property buying and selling website. Only frontend.."
          techArray={["HTML", "CSS", "SASS"]}
          webLink="https://hustlerzzz.github.io/nexter/"
          key={1}
        />
        <ProjectCard
          imgUrl="2"
          about="Created a hotel booking web app UI."
          techArray={["HTML", "CSS", "SASS"]}
          webLink="https://hustlerzzz.github.io/trillo/"
        />
        <ProjectCard
          imgUrl="1"
          about="Created a gym website for local gym. Uploading the form data to google sheets using JavaScript."
          techArray={["HTML", "CSS", "SASS", "JavaScript"]}
          webLink="https://hustlerzzz.github.io/astheticgym/"
        />
        <ProjectCard
          imgUrl="3"
          about="Created a password generator based on space theme with local storage support for saving the passwords."
          techArray={["HTML", "CSS", "Javascript"]}
          webLink="https://pass-gen-hustler.netlify.app/"
        />
        <ProjectCard
          imgUrl="4"
          about="Created a ready to deploy Pizza shop which push the orders on the API."
          techArray={["HTML", "CSS", "Javascript", "ReactJs", "Tailwind CSS"]}
          webLink="https://tangerine-yeot-6e1b16.netlify.app/"
        />
        <ProjectCard
          imgUrl="allied"
          about="Created a full stack website as a freelance work."
          techArray={[
            "PUG",
            "CSS",
            "SCSS",
            "JavaScript",
            "ExpressJS",
            "NodeJs",
            "MongoDB",
            "Mongoose",
          ]}
          webLink="https://alliedarchitecturals.com/"
        />
      </div>
    </div>
  );
}

export default Projects;
