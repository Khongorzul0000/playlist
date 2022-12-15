import styles from "../styles/Oneof.module.css";

export const Happy = () => {
  const Songs = [
    {
      imgSrc:
        "https://i.scdn.co/image/ab67706f00000003f430fff70e7bf1ab096d63d5",
      p: "By spotify",
      h: "Somewhere Over there radio",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67706f0000000324893f0507c0fe2855565438",
      p: "By spotify",
      h: "Riptide radio",
    },

    {
      imgSrc:
        "https://i.scdn.co/image/ab67706f000000035fa2770f7418d878a008ca49",
      p: "By spotify",
      h: "Family line radio",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67706f000000032a2d103b23aeb9314c586e7b",
      p: "By spotify",
      h: "Revenge radio",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67706f00000003308b811b06db445c34a9a1cf",
      p: "By spotify",
      h: "Sweater heather radio",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67706f00000003e7b4d04dec39e79b055617c2",
      p: "By spotify",
      h: "The weeknd radio",
    },
  ];
  return (
    
      <div className={styles.space}>
        {Songs &&
          Songs.map((song, index) => (
           <div >
             <div className={styles.card}>
              <img src={song.imgSrc} className={styles.cat}></img>
              <div className={styles.h}>{song.h}</div>
              <div className={styles.p}>{song.p}</div>
            </div>
           </div>
          ))}
      </div>
    
  );
};
