import styles from "../../styles/works/WorkGraphics.module.css";
import Image from "../Image";

type WorkGraphicsProps = {
  youtubeEmbedSrc?: string;
  graphicURLs: string[];
};

export default function WorkGraphics({
  youtubeEmbedSrc,
  graphicURLs,
}: WorkGraphicsProps) {
  return (
    <div className={styles.container}>
      {youtubeEmbedSrc && (
        <div className={styles.graphicContainer}>
          <iframe
            src={youtubeEmbedSrc}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {graphicURLs.map((url, index) => (
        <div key={index} className={styles.graphicContainer}>
          <Image src={url} />
        </div>
      ))}
    </div>
  );
}
