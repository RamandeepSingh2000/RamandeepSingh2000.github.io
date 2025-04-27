import { useState } from "react";
import WorldMap from "./WorldMap";
import { useEffect } from "react";
import styles from "../styles/CountriesVisited.module.css";
import Page from "./Page";

export default function CountriesVisited() {
  const [color, setColor] = useState("orange");
  useEffect(() => {
    const handleThemeColorChange = () => {
      const rootStyle = getComputedStyle(document.documentElement);
      const newColor = rootStyle.getPropertyValue("--theme-color").trim();
      setColor(newColor);
    };

    handleThemeColorChange(); // Initialize with the current value
  }, []);

  return (
    <Page title="Countries Visited">
      <p className={styles.message}>
        It seems I have yet to see the world 😅. If you <strong>hire me</strong>
        , I will have the money to visit more countries 🌍. Don’t worry, I will
        bring you along 🫵🏼.
      </p>
      <WorldMap highlightColor={color} className={styles.map} />
    </Page>
  );
}
