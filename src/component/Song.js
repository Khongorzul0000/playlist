import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/Song.module.css";
export const Song = () => {
    const [data, setData] = useState([0])
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(1);
  const baseUrl = "https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/";
  useEffect(() => {
    axios
      .get(baseUrl + `users?limit=${limit}&page=${page}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [limit]);
  return(
    <div className={styles.body}>
    <div >    
    {data.map(({ image, id, name }) => (
                <div className={styles.card}>
                    <img src={image} className={styles.cat}></img>
                   <p>{name}</p>
                </div>
                
              ))}
    </div>
    </div>
  );
};
