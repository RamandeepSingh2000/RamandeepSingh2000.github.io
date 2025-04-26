import Tile from "./Tile";
import styles from "../../styles/tiles/StatusTile.module.css";

export default function StatusTile() {
  return (
    <Tile>
      <div className={styles.container}>
        <div className={styles.stats}>
          <h4>Player Stats</h4>
          <p>
            <strong>Status: </strong>Available for Missions
          </p>
          <p>
            <strong>XP: </strong>85% to next level
          </p>
          <p>
            <strong>Inventory: </strong>Coffee, Code, Curiosity
          </p>
          <p>
            <strong>Mood: </strong>Focused
          </p>
        </div>
        <div className={styles.graphic}>
          <img src="./coffee-guy.gif" />
        </div>
      </div>
    </Tile>
  );
}
