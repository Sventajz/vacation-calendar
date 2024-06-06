import styles from "./welcome.module.css";

export default function Welcome({ username }) {
  return (
    <div className={styles.welcomeWrapper}>
      <div className={styles.welcomeImg}>
        <img
          src="/avatar.png"
          alt="Avatar picture"
          className={styles.avatarImg}
        />
      </div>
      <div className={styles.welcomeText}>
        <h3>Welcome,{username} </h3>
        <p>
          We are excited to have you here. This platform is designed to
          streamline and simplify the process of managing Paid Time Off (PTO)
          for you and your team. Here's what you can expect:
        </p>
        <p>
          <b>Ease of Use</b>: Our intuitive interface makes it easy to request,
          approve, and track PTO.
        </p>
        <p>
          <b>Real-Time Updates:</b> Stay up-to-date with real-time notifications
          and calendar integration.
        </p>
        <p>
          <b>Comprehensive Reports:</b> Access detailed reports to help manage
          and plan for your team's time off.
        </p>
        <p>
          <b>Support:</b> Our support team is here to assist you with any
          questions or issues.
        </p>
        <div className={styles.gotoPTO}>Go to PTO</div>
      </div>
    </div>
  );
}
