import styles from "../styles/Nav.module.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Left, Song, See} from "../component"
export const Nav = ()=>{
    return(
        <BrowserRouter>
       
            <div className={styles.nav}>
           <div className={styles.zai}>
           <Link to="see-more" className={styles.see}>See more</Link>
            <Link to="show-all" className={styles.see}>show all</Link>
           </div>
                <Routes>
                    <Route path="see-more" element={<See/>}></Route>
                </Routes>
               
            </div>
        
        </BrowserRouter>
    )
}