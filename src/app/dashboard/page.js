import styles from "./dashboard.module.css";
import Welcome from "./welcome.js";
export default function Dashboard() {
  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.sideBar}>
        <div className={styles.banner}>
          <img src="/kantunlogo.svg" alt="Kantun Logo" />
          <h2>PTO System</h2>
        </div>

        <ul className={styles.sidebarItems}>
          <li className={styles.sidebarButtons}>
            <img src="/home.svg" alt="home svg icon" height={20} width={20} />
            Home
          </li>
          <li className={styles.sidebarButtons}>
            <img src="/work.svg" alt="home svg icon" height={20} width={20} />
            PTO
          </li>
        </ul>

        <ul className={styles.userControls}>
          <li className={`${styles.sidebarButtons} ${styles.user}`}>
            <img src="/user.svg" alt="home svg icon" height={20} width={20} />
            USERNAME
          </li>
          <br></br>
          <li className={styles.sidebarButtons}>
            <img src="/logout.svg" alt="home svg icon" height={20} width={20} />
            LogOut
          </li>
        </ul>
      </div>
      <div className={styles.dashboard}>
        <Welcome />
      </div>
    </div>
  );
}
