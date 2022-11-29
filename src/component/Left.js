import { FaSpotify } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import styles from "../styles/Left.module.css";
export const Left = () => {
  return (
    <div className={styles.body}>
      <div className={styles.back}>
        <div className={styles.spoty}>
          <FaSpotify />
          Play-list
        </div>
        <div className={styles.home}>
          <AiFillHome />
          Home
        </div>
        <div className={styles.home}>
          <AiOutlineSearch />
          Search
        </div>
        <div className={styles.home}>
          <BiLibrary />
          Library
        </div>
      </div>
      <div>
        <div className={styles.nav}></div>
        <div className={styles.main}></div>
      </div>
    </div>
  );
};
