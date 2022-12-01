import styles from "../styles/Main.module.css";
import { Left, Song, Nav, See } from "../component";

export const Main = () => {
  return (
    <>
      <div className={styles.main}>
        <Left />
        <div>
          <Nav />

          <div className={styles.body}>
            <h2 className={styles.focus}>Focus song</h2>
            <div>
              <Song />
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};
