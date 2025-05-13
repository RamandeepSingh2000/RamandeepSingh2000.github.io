import styles from "../styles/SocialButtonLink.module.css";

type SocialButtonLinkProps = {
  iconURL: string;
  link: string;
};

export default function SocialButtonLink({
  iconURL,
  link,
}: SocialButtonLinkProps) {
  return (
    <button
      className={styles.socialButton}
      onClick={() => window.open(`${link}`, "_blank")}
    >
      <div style={{ maskImage: `url(${iconURL})` }} />
    </button>
  );
}
