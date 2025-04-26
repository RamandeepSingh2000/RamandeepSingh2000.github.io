import styles from "../../styles/tiles/HobbiesTile.module.css";
import NavigationTile from "./NavigationTile";
import Tile from "./Tile";
import WorkInProgress from "./WorkInProgress";

export default function HobbiesTile() {
  //return <NavigationTile title="Hobbies" route="/hobbies" />;
  return (
    <Tile>
      <WorkInProgress title="Hobbies" />
    </Tile>
  );
}
