import { useNavigate } from "react-router-dom";
import styles from "../styles/Page.module.css";

type PageProps = {
  title?: string;
  backRoute?: string;
  children?: React.ReactNode;
};

export default function Page({ backRoute, title, children }: PageProps) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(backRoute ?? "/");
  };

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.header}>
          <button onClick={handleBack}>Back</button>
          <h2>{title}</h2>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
