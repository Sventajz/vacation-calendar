import Image from "next/image";
import styles from "./page.module.css";
import Login from "../components/Login/index.jsx";
import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
library.add(faEye, faEyeSlash)

export default function Home() {
  return (
    <main className={styles.main}>
       <div className={styles.imageContainer}>
        <img className={styles.imageHomepage} src="/3634 1.png" alt="Background" />
        <div className={styles.layer}></div>
      </div>
      <Login></Login>
    </main>
  );
}