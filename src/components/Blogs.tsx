import styles from "../styles/Blogs.module.css";
import data from "../assets/blogs.json";
import Page from "./Page";
import { Link } from "react-router-dom";

type Blog = {
  title: string;
  content: string;
  date: string;
};

const blogs: Blog[] = data;

export default function Blogs() {
  return (
    <Page title="Blogs">
      <div className={styles.blogs}>
        {blogs.map((blog, index) => (
          <Link to={`/blogs/${index}`} key={index} className={styles.blog}>
            <h3>{blog.title}</h3>
            <p className={styles.date}>{blog.date}</p>
          </Link>
        ))}
      </div>
    </Page>
  );
}
