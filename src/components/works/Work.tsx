import styles from "../../styles/works/Work.module.css";

type WorkProps = {
  title: string;
  text: string;
  children?: React.ReactNode;
};

export default function Work({ title, text, children }: WorkProps) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{text}</p>
      {children}
    </div>
  );
}
