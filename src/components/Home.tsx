import style from "../styles/Home.module.css";
import WelcomeTile from "./tiles/WelcomeTile";
import AboutTile from "./tiles/AboutTile";
import ContactTile from "./tiles/ContactTile";
import BlogsTile from "./tiles/BlogsTile";
import HobbiesTile from "./tiles/HobbiesTile";
import PlaygroundTile from "./tiles/PlaygroundTile";
import WorksTile from "./tiles/WorksTile";
import ColorPaletteTile from "./tiles/ColorPaletteTile";
import StatusTile from "./tiles/StatusTile";
import CountriesVisitedTile from "./tiles/CountriesVisitedTile";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.grid}>
        <div className={`${style["grid-item-0"]} ${style["grid-item"]}`}>
          <WelcomeTile />
        </div>
        <div className={`${style["grid-item-1"]} ${style["grid-item"]}`}>
          <AboutTile />
        </div>
        <div className={`${style["grid-item-2"]} ${style["grid-item"]}`}>
          <ContactTile />
        </div>
        <div className={`${style["grid-item-3"]} ${style["grid-item"]}`}>
          <BlogsTile />
        </div>
        <div className={`${style["grid-item-4"]} ${style["grid-item"]}`}>
          <HobbiesTile />
        </div>
        <div className={`${style["grid-item-5"]} ${style["grid-item"]}`}>
          <PlaygroundTile />
        </div>
        <div className={`${style["grid-item-6"]} ${style["grid-item"]}`}>
          <WorksTile />
        </div>
        <div className={`${style["grid-item-7"]} ${style["grid-item"]}`}>
          <ColorPaletteTile />
        </div>
        <div className={`${style["grid-item-8"]} ${style["grid-item"]}`}>
          <StatusTile />
        </div>
        <div className={`${style["grid-item-9"]} ${style["grid-item"]}`}>
          <CountriesVisitedTile />
        </div>
      </div>
    </div>
  );
}
