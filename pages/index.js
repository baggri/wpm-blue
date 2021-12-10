import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";

export default function Home() {
  let text = "a ability able";
  let [currentKeyIndex, setCurrentKeyIndex] = useState(0);

    const callFunction = (event) => {
      console.log(event.key, text[currentKeyIndex]);

      if (event.key === text[currentKeyIndex]) {
        setCurrentKeyIndex((currentKeyIndex) => currentKeyIndex + 1);
        console.log("based " + event.key + " " + currentKeyIndex);
      }
    };
  
  if (text[currentKeyIndex] == text[text.length]) {
    console.log('we finished !!')
  }

  useEffect(() => {
    window.addEventListener("keypress", callFunction);
    return () => {
      // unregister eventListener
      window.removeEventListener("keypress", callFunction);
    };
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
