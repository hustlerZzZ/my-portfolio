import styles from "./ProjectCard.module.css";

interface IProps {
  imgUrl: string;
  techArray: string[];
  about: string;
  webLink: string;
}

function ProjectCard({ imgUrl, techArray, about, webLink }: IProps) {
  return (
    <div className={styles.card}>
      <img src={`./${imgUrl}.png`} alt={imgUrl} className={styles.img} />
      <div className={styles.textBox}>
        {/*<h3>{name}</h3>*/}
        <p>{about}</p>
      </div>
      <div className={styles.skills}>
        <ul>
          {techArray.map((el: string) => (
            <li>{el}</li>
          ))}
        </ul>
      </div>
      <div className={styles.btnBox}>
        <a href={webLink} target="_blank" className={styles.btn}>
          Live Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
