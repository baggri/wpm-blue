import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";

export default function Home() {
  let text = "abcdef ability able about above accept according account across act";

  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);

  useEffect(() => {
    window.addEventListener("keypress", (event) => {
      
      if (event.key == text[currentKeyIndex]) {
        setCurrentKeyIndex(currentKeyIndex + 1);
        console.log("based " + event.key + " " + currentKeyIndex);

      } else {
        console.log("brah " + event.key + " " + currentKeyIndex);
      }

      return currentKeyIndex;
    });
  }, [currentKeyIndex]);

 
  return (
    <div className={styles.container}>
      <Head>
        <title>wpm.blue</title>
        <meta name="description" content="wpm.blue typing game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>
          <a className={styles.red}>{text.slice(0, currentKeyIndex)}</a>
          <a className={styles.untyped}>{text.slice(currentKeyIndex)}</a>
          {currentKeyIndex}
        </h1>
      </div>
    </div>
  );
}
