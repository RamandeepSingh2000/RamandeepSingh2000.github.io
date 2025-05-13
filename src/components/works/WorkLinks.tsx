import styles from "../../styles/works/WorkLinks.module.css";
import SocialButtonLink from "../SocialButtonLink";

type WorkLink = {
  iconURL: string;
  link: string;
};

type WorkLinksProps = {
  links: WorkLink[];
};

export default function WorkLinks({ links }: WorkLinksProps) {
  return (
    <div className={styles.container}>
      {links.map((link, index) => (
        <SocialButtonLink key={index} iconURL={link.iconURL} link={link.link} />
      ))}
    </div>
  );
}
