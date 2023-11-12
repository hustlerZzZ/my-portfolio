import styles from "./Contact.module.css";

function Contact() {
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.textBox}>
        <h2 className={styles.heading}>Contact Me</h2>
        <p className={styles.subHeading}>
          Want to work with me or wanna offer me a job. Contact me using the
          below buttons.
        </p>
      </div>
      <div className={styles.btnBox}>
        <a href="tel: +918178627096" className={styles.phone}>
          Call Me
        </a>
        <a href="mailto: rishabpal2000@gmail.com" className={styles.email}>
          Email Me
        </a>
      </div>
    </div>
  );
}

export default Contact;
