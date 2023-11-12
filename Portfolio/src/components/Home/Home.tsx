import styles from "./Home.module.css";
import { TypeAnimation } from "react-type-animation";
import pfp from "/pfp.jpeg";

function Home() {
  return (
    <div id="about" className={styles.home}>
      <div className={styles.colLeft}>
        <div className={styles.allText}>
          <div className={styles.mainText}>
            <h2>Hi, I am</h2>
            <h1>Prince Pal</h1>
            <h2>
              I am a{" "}
              <span>
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    "Front-End Developer",
                    "Back-End Developer",
                  ]}
                  wrapper="span"
                  speed={{
                    type: "keyStrokeDelayInMs",
                    value: 250,
                  }}
                  className={styles.profileText}
                  repeat={Infinity}
                />
              </span>
            </h2>
          </div>
          <p>
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
        </div>
        <div className={styles.btnContainer}>
          <a href="./cv.pdf" download target="_blank" className={styles.btn}>
            Download CV
          </a>
        </div>
      </div>
      <div className={styles.colRight}>
        <img src={pfp} alt="image" />
      </div>
    </div>
  );
}

export default Home;
