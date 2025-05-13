import styles from "../styles/Works.module.css";
import Page from "./Page";
import Work from "./works/Work";
import data from "../assets/works.json";
import WorkGraphics from "./works/WorkGraphics";
import WorkLinks from "./works/WorkLinks";
import icons from "../constants/icons";

type WorkData = {
  title: string;
  text: string;
  youtubeEmbedSrc?: string;
  links?: {
    platform: string;
    url: string;
  }[];
  imageURLs: string[];
};

const works: WorkData[] = data;

export default function Works() {
  return (
    <Page title="Works">
      <div className={styles.container}>
        {works.map((work, index) => (
          <Work key={index} title={work.title} text={work.text}>
            {work.links && (
              <WorkLinks
                links={work.links.map((link) => ({
                  iconURL: icons[link.platform],
                  link: link.url,
                }))}
              />
            )}
            <WorkGraphics
              youtubeEmbedSrc={work.youtubeEmbedSrc}
              graphicURLs={work.imageURLs}
            />
          </Work>
        ))}
      </div>
    </Page>
  );
}
