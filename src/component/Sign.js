import styles from "../styles/Sign.module.css"
import { BsSpotify } from "react-icons/bs";

import {Left, Song, See} from "../component"
export const Sign = ()=>{
    return(
        <div className={styles.biy}>
            <div className={styles.just}>
        <div className={styles.spo}>
            <BsSpotify/>
            Spotify
        </div>
        <p className={styles.p}>Sign up for free to start listening.</p>
       <div className={styles.btnflex}>
       <button className={styles.button}>Sign up with facebook</button>
        <button className={styles.btn}>Sign up with google</button>
       </div>
        <p>or</p>
        <p className={styles.address}>sign up with you email address</p>
        <div>
            <p>What is your email?</p>
            <input className={styles.enter} placeholder="Enter your email"></input>
        </div>
        <div>
            <p>Confirm your email?</p>
            <input className={styles.enter} placeholder="Enter your email again"></input>
        </div>
        <div>
            <p>Create a password?</p>
            <input className={styles.enter} placeholder="Create a password"></input>
        </div>
        <div>
            <p>What we should call you?</p>
            <input className={styles.enter} placeholder="Enter a profile name"></input>
        </div>
        <div >
            <p>What is your date of birth?</p>
            <div className={styles.ymd}>
            <div>
                <p>Year</p>
                <input className={styles.yyy} placeholder="YYY"></input>
            </div>
            <div>
                <p>Month</p>
                <input className={styles.yyy} placeholder="Month"></input>
            </div>
            <div>
                <p>Day</p>
                <input className={styles.yyy} placeholder="Day"></input>
            </div>
            </div>
        </div>
        <div>
            <p>What is your gender?</p>
            <div className={styles.gender}>
                <div className={styles.check}>
                <input type="checkbox"></input>
                <p>male</p>
                </div>
                <div className={styles.check}>
                <input type="checkbox"></input>
                <p>female</p>
                </div>
                <div className={styles.check}>
                <input type="checkbox"></input>
                <p>other</p>
                </div>
               

            </div>
        </div>
        <div className={styles.last}>
            <button className={styles.sing}>Sign up</button>
        </div>
        </div>
        </div>
    )
}