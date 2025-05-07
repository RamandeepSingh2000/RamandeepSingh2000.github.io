import styles from "../../styles/hobbies/HobbyGraphics.module.css";

type HobbyGraphicProps = {
  children?: React.ReactNode;
};

export default function HobbyGraphics({ children }: HobbyGraphicProps) {
  return <div className={styles.container}>{children}</div>;
}
