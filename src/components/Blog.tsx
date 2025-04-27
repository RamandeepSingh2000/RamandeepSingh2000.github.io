import { useParams } from "react-router-dom";
import styles from "../styles/Blog.module.css";
import data from "../assets/blogs.json";
import Page from "./Page";

type Blog = {
  title: string;
  content: string;
  date: string;
};

const blogs: Blog[] = data;

export default function Blog() {
  let params = useParams();
  const index = parseInt(params.id ?? "0");
  const blog = blogs[index];

  return (
    <Page title="" backRoute="/blogs">
      <div className={styles.blog}>
        <h1>{blog.title}</h1>
        <p className={styles.date}>{blog.date}</p>
        <p className={styles.content}>{blog.content}</p>
      </div>
    </Page>
  );
}
