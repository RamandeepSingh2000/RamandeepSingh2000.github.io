import styles from "../../styles/hobbies/Hobby.module.css";

type HobbyProps = {
  title: string;
  text: string;
  children?: React.ReactNode;
};

export default function Hobby({ title, text, children }: HobbyProps) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{text}</p>
      {children}
    </div>
  );
}
