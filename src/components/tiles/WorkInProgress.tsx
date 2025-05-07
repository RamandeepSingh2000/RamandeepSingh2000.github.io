import styles from "../../styles/tiles/WorkInProgress.module.css";

type WorkInProgressProps = {
  title: string;
};

export default function WorkInProgress({ title }: WorkInProgressProps) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <img src="./graphic/others/wip.png" />
    </div>
  );
}
