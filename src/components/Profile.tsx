import { useChallenges } from "../hooks/useChallenges";

import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useChallenges();

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/51219408?s=460&u=f10fcb3577198bff3012f153c6fb53e043cfdcb9&v=4"
        alt="Thiago"
      />
      <div>
        <strong>Thiago Pereira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
