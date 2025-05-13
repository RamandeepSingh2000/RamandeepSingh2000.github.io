import styles from "../styles/Hobbies.module.css";
import Hobby from "./hobbies/Hobby";
import HobbyGraphics from "./hobbies/HobbyGraphics";
import Page from "./Page";
import data from "../assets/hobbies.json";

type HobbyData = {
  title: string;
  text: string;
  imageURLs: string[];
};

const hobbies: HobbyData[] = data;

export default function Hobbies() {
  return (
    <Page title="Hobbies">
      <div className={styles.container}>
        {hobbies.map((hobby, index) => (
          <Hobby key={index} title={hobby.title} text={hobby.text}>
            <HobbyGraphics graphicsURLs={hobby.imageURLs} />
          </Hobby>
        ))}
      </div>
    </Page>
  );
}
