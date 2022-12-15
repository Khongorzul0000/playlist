import styles from "../styles/My.module.css";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { Left, Song, Nav, See, Oneof, Lenght } from "../component";

export const My = () => {
  return (
    <div>
        <div className={styles.eight}>
            <div className={styles.rest}>
                <img src="https://img.freepik.com/free-photo/dark-room-background-with-light_125540-1022.jpg?w=2000" className={styles.cat}></img>
                <div className={styles.side}>
                    <div >play-list</div>
                    <h1 className={styles.pl}>My play-list #1</h1>
                    <div>User name</div>
                    
                </div>
            </div>
            <div>
               <div className={styles.dot}> 
                <BsThreeDots/>
               </div>
               <div className={styles.hr}></div>
               <p className={styles.let}>Let's find something for your playlist</p>
               <input className={styles.in} placeholder="Search for songs or episode"></input>
            </div>
        </div>
    </div>
  );
};
