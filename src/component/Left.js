import { FaSpotify } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { See, Main, Date, Sign, Song, Search } from "../component";
import { BiLibrary } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "../styles/Left.module.css";
export const Left = () => {
  return (
    <BrowserRouter>
      <div className={styles.body}>
        <div className={styles.back}>
          <div className={styles.spoty}>
            <FaSpotify />
            Play-list
          </div>
          <div className={styles.home}>
            <AiFillHome />
            <Link to="Home" className={styles.link}>
              Home
            </Link>
          </div>
          <div className={styles.home}>
            <AiOutlineSearch />
            <Link to="Search" className={styles.link}>
              Search
            </Link>
          </div>
          <div className={styles.home}>
            <BiLibrary />
            <Link to="Library" className={styles.link}>
              Your liked
            </Link>
          </div>
          <div className={styles.home}>
            <AiFillSignal/>
            <Link to="sign-up" className={styles.link}>
              Sign-up
            </Link>
          </div>
          <div className={styles.play}>
            <AiFillPlayCircle />
            <Link to="see-more" className={styles.link}>
              See more
            </Link>
          </div>
          
        </div>
      </div>
      <Routes>
        <Route path="Home" element={<Main />}></Route>
        <Route path="Search" element={<Search />}></Route>
        <Route path="see-more" element={<See />}></Route>
        <Route path="sign-up" element={<Sign />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
