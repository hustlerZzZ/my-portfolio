import styles from "./InternshipCard.module.css";

interface IProps {
  imgUrl: string;
  heading: string;
  company: string;
  date: string;
  subHeading: string;
  skillsArray: string[];
}
function InternshipCard({
  imgUrl,
  heading,
  company,
  date,
  subHeading,
  skillsArray,
}: IProps) {
  return (
    <>
      <div className={styles.headTop}>
        <img
          src={`./${imgUrl}.png`}
          alt="hacktoberfest"
          className={styles.icon}
        />
        <div className={styles.headText}>
          <h3>{heading}</h3>
          <h4>{company}</h4>
          <p>{date}</p>
        </div>
      </div>
      <p className={styles.subHeading}>{subHeading}</p>
      <div className={styles.skills}>
        <span>Skills:</span>
        <ul>
          {skillsArray.map((el: string) => (
            <li>{el}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default InternshipCard;
