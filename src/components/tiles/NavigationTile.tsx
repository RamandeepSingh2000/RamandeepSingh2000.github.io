import { useNavigate } from "react-router-dom";
import styles from "../../styles/tiles/Navigation.module.css";
import tileStyles from "../../styles/tiles/Tile.module.css";

type NavigationProps = {
  title: string;
  route: string;
};

export default function NavigationTile({ title, route }: NavigationProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(route);
  };
  return (
    <div
      className={`${tileStyles.tile} ${styles.tilePointer}`}
      onClick={() => handleClick()}
    >
      <div className={styles.container}>
        <h2>{title}</h2>
        <img src="./graphic/others/nav-arrow.png" />
      </div>
    </div>
  );
}
