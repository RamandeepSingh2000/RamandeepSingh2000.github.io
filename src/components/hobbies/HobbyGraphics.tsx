import styles from "../../styles/hobbies/HobbyGraphics.module.css";
import Image from "../Image";

type HobbyGraphicsProps = {
  graphicsURLs: string[];
};

export default function HobbyGraphics({ graphicsURLs }: HobbyGraphicsProps) {
  return (
    <div className={styles.container}>
      {graphicsURLs.map((url, index) => (
        <div key={index} className={styles.imageContainer}>
          <Image src={url} />
        </div>
      ))}
    </div>
  );
}
