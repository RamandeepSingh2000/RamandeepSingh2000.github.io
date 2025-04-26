import Tile from "./Tile";
import styles from "../../styles/tiles/ColorPaletteTile.module.css";

export default function ColorPaletteTile() {
  const colors = ["#FFA500", "#008000", "#FFC0CB", "#FFFF00", "#FF0000"];
  const onClick = (color: string) => {
    document.documentElement.style.setProperty("--theme-color", color);
  };
  return (
    <Tile>
      <div className={styles.container}>
        {colors.map((color, index) => (
          <div
            key={index}
            className={styles.color}
            style={{ backgroundColor: color }}
            onClick={() => onClick(color)}
          />
        ))}
      </div>
    </Tile>
  );
}
