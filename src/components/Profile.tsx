import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/HeitorFranco.png" alt="Heitor Franco" />
      <div>
        <strong>Heitor Franco</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level 1
        </p>
      </div>
    </div>
  );
}
