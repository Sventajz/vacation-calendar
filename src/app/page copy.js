import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.leftColumn}>
      <img
        src="/3634 1.png"
        alt="Login Img"
        className={styles.loginImgLogo}
        />    
        </div>

        <div className={styles.rightColumn}>

        </div>

      <div className={styles.modalLogin} aria-modal="true" role="dialog">
        <div className={styles.forma}>
            
        </div>
      </div>
      {/* <div id="modalOverlay" modal-backdrop="" class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div> */}
    </main>
  );
}