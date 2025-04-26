import Tile from "./Tile";
import styles from "../../styles/tiles/ContactTile.module.css";

const { VITE_EMAIL, VITE_GITHUB_LINK, VITE_LINKEDIN_LINK, VITE_DISCORD_LINK } =
  import.meta.env;

export default function ContactTile() {
  return (
    <Tile>
      <div className={styles.container}>
        <h3>Let’s work together to build some really cool projects!</h3>
        <h4>Contact Details</h4>
        <p className={styles.contactDetails}>{VITE_EMAIL}</p>
        <h4>Socials</h4>
        <a href={VITE_LINKEDIN_LINK} target="_blank">
          LinkedIn
        </a>
        <a href={VITE_GITHUB_LINK} target="_blank">
          GitHub
        </a>
        <a href={VITE_DISCORD_LINK} target="_blank">
          Discord
        </a>
      </div>
    </Tile>
  );
}
