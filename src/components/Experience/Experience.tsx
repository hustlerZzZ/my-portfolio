import styles from "./Experience.module.css";
import Separator from "../Seperator/Separator.tsx";
import InternshipCard from "../InternshipCard/InternshipCard.tsx";

function Experience() {
  return (
    <div id="experience" className={styles.experience}>
      <div className={styles.textBox}>
        <h2 className={styles.expHeading}>My Experience</h2>
        <p className={styles.expSubHeading}>
          My work experience as a software engineer and working on different
          companies and projects.
        </p>
      </div>
        <div className={styles.expBox}>
            <div className={styles.itemBox}>
                <Separator/>
                <div className={styles.item}>
                    <InternshipCard
                        imgUrl="gssoc"
                        heading="Mentor as Full Stack Developer"
                        company="GSSoC (GirlScript Summer of Code) 2024"
                        date="10th May 2024 - 10th Aug 2024"
                        subHeading="Guiding and mentoring aspiring contributors within the open-source community 🚀🥌"
                        skillsArray={[
                            "ReactJs",
                            "TailwindCSS",
                            "JavaScript",
                            "Next Js",
                            "ExpressJs",
                            "Prisma",
                            "NodeJs",
                            "ExpressJs",
                            "Postgres"
                        ]}
                    />
                </div>
            </div>
            <div className={styles.itemBox}>
                <Separator/>
                <div className={styles.item}>
                    <InternshipCard
                        imgUrl="hacktoberfest"
                        heading="Open Source Contribution"
                        company="Hacktoberfest 2023 (DigitalOccean, LLC)"
                        date="1st Oct 2023 - 31st Oct 2023"
                        subHeading="Contributing to different open-sourse projects and learn from industry experts."
                        skillsArray={[
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "ReactJs",
                            "Bootstrap",
                            "TailwindCSS",
                            "NodeJs",
                            "ExpressJs",
                        ]}
                    />
                </div>
            </div>
            <div className={styles.itemBox}>
                <Separator/>
                <div className={styles.item}>
                    <InternshipCard
                        imgUrl="career"
                        heading="Front End Intern"
                        company="Career Width"
                        date="1st Mar 2023 - 31st Jun 2023"
                        subHeading="Working on the frontend of the web application using HTML, CSS, Bootstrap, JavaScript."
                        skillsArray={["HTML", "CSS", "Bootstrap", "JavaScript"]}
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Experience;
