import styles from "./Skills.module.css";
import { useState } from "react";

function Skills() {
  const [selectedBtn, setSelectedBtn] = useState(0);

  const data = [
    {
      name: "front-end",
      stack: [
        "HTML",
        "Pug",
        "Sass",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap",
        "MUI",
        "ReactJs",
        "Redux",
        "NextJs",
      ],
    },
    {
      name: "back-end",
      stack: [
        "Node Js",
        "Express Js",
        "MongoDB",
        "MySQL",
        "Mongoose",
        "Supabase",
      ],
    },
    {
      name: "others",
      stack: ["Git", "Github", "Netlify", "Postman"],
    },
  ];

  return (
    <div id="skills" className={styles.skills}>
      <div className={styles.textBox}>
        <h2 className={styles.skillHeading}>Skills</h2>
        <p className={styles.skillSubheading}>
          Here are some of my skills on which I have been working on for the
          past 1 year.
        </p>
      </div>
      <div className={`${styles.btnContainer} specialBtn`}>
        <button
          className={
            selectedBtn === 0
              ? `${styles.btn} ${styles.active}`
              : `${styles.btn}`
          }
          onClick={() => setSelectedBtn(0)}
        >
          Front End
        </button>
        <button
          className={
            selectedBtn === 1
              ? `${styles.btn} ${styles.active}`
              : `${styles.btn}`
          }
          onClick={() => setSelectedBtn(1)}
        >
          Back End
        </button>
        <button
          className={
            selectedBtn === 2
              ? `${styles.btn} ${styles.active}`
              : `${styles.btn}`
          }
          onClick={() => setSelectedBtn(2)}
        >
          Others..
        </button>
      </div>
      <div className={styles.skillContainer}>
        <div className={styles.card}>
          <div className={styles.itemContainer}>
            {data[selectedBtn].stack.map((el) => (
              <div className={styles.item}>
                <img
                  src={`${el.toLowerCase()}.png`}
                  className={styles.icon}
                  alt={`${el}`}
                />
                <p>{el}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
