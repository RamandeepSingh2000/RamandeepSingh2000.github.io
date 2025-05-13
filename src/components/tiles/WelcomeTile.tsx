import Tile from "./Tile";
import styles from "../../styles/tiles/WelcomeTile.module.css";
import SocialButtonLink from "../SocialButtonLink";
import icons from "../../constants/icons";

const { VITE_NAME, VITE_GITHUB_LINK, VITE_LINKEDIN_LINK, VITE_DISCORD_LINK } =
  import.meta.env;

export default function WelcomeTile() {
  return (
    <Tile>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <h4>welcome</h4>
          <p>
            Hi, I’m <strong>{VITE_NAME}</strong>, a software developer with
            strong focus on clean and modular code.
          </p>
          <p className={styles.quote}>
            “Complexity is chaos. Simplicity is beauty. A fine balance between
            the two is elegance.”
          </p>
          <div className={styles.socials}>
            <SocialButtonLink link={VITE_GITHUB_LINK} iconURL={icons.gitHub} />
            <SocialButtonLink
              link={VITE_LINKEDIN_LINK}
              iconURL={icons.linkedIn}
            />
            <SocialButtonLink
              link={VITE_DISCORD_LINK}
              iconURL={icons.discord}
            />
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.graphic}>
            <div className={styles.light} />
            <img src="./graphic/others/meditate-avatar.png" />
          </div>
        </div>
      </div>
    </Tile>
  );
}
