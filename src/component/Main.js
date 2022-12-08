import styles from "../styles/Main.module.css";
import { Left, Song, Nav, See } from "../component";

export const Main = () => {
  return (
    <>
      <div className={styles.main}>
      
        <div>
          <div className={styles.body}>
            <div className={styles.over}>
            <h2 className={styles.focus}>Focus song</h2>
            <Song />
            <h2 className={styles.focus}>Mood</h2>
            <Song />
            <h2 className={styles.focus}>Spotify play-lists</h2>
            <Song />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
