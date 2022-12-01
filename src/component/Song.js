import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/Song.module.css";
import { See, Main } from "../component";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export const Song = () => {
  const [data, setData] = useState([0]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const baseUrl = "https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/";
  useEffect(() => {
    axios
      .get(baseUrl + `users?limit=${limit}&page=${page}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [limit]);
  return (
    <>
      <div className={styles.body}>
        {data.map(({ image, id, name }) => (
          <div className={styles.card}>
            <img src={image} className={styles.cat}></img>
            <p>{name}</p>
           <p className={styles.pp}>Keep calm and focus whit abmient and post-rock music</p>
          </div>
        ))}
      </div>
    </>
  );
};
