import { useState } from "react";
import styles from "../../styles/hobbies/HobbyGraphic.module.css";

type HobbyGraphicProps = {
  imageURL: string;
};

export default function HobbyGraphic({ imageURL }: HobbyGraphicProps) {
  return (
    <div className={styles.container}>
      <img src={imageURL} />
    </div>
  );
}
