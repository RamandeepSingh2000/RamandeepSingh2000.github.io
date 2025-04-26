import Tile from "./Tile";
import styles from "../../styles/tiles/AboutTile.module.css";

const { VITE_NAME } = import.meta.env;

export default function AboutTile() {
  return (
    <Tile>
      <div className={styles.container}>
        <h4>About Me</h4>
        <p>
          Hi, I’m{" "}
          <strong className={styles.name}>
            {`${VITE_NAME}`.split(" ")[0]}
          </strong>
          , a creative and growth-oriented software developer.
        </p>
        <p>
          Looking for a <strong>web developer</strong>?
        </p>
        <p>These are my primary tools of choice: </p>
        <ul>
          <li>React</li>
          <li>NodeJS</li>
          <li>Typescript</li>
          <li>ASP.NET</li>
          <li>C#</li>
        </ul>
        <p>
          Looking for a <strong>game developer</strong>?
        </p>
        <p>These are my primary weapons of choice:</p>
        <ul>
          <li>Unity3D</li>
          <li>Unreal Engine</li>
          <li>Blender</li>
          <li>GIMP</li>
        </ul>
        <p>
          What was that? You would like to hire me? Umm… okay. We can talk about
          that.
        </p>
      </div>
    </Tile>
  );
}
