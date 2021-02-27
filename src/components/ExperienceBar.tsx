import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel, level } = useContext(
    ChallengesContext
  );
  const experienceLevel = Math.pow(level === 1 ? 0 : level * 4, 2);
  const percentToNextLevel =
    Math.round((currentExperience - experienceLevel) * 100) /
    experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>{experienceLevel} xp</span>
      <div>
        <div
          style={{ transition: "width 1s", width: `${percentToNextLevel}%` }}
        />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%`, transition: "left 1s" }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
