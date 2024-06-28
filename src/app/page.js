import styles from "./page.module.css";
import Login from "../components/Login/index";
import React from "react";
//import { library } from "@fortawesome/fontawesome-svg-core";
//import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
//library.add(faEye, faEyeSlash);

export default function Home() {
  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
}
