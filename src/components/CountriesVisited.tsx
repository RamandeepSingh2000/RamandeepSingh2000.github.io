import { useState } from "react";
import WorldMap from "./WorldMap";
import { useEffect } from "react";
import styles from "../styles/CountriesVisited.module.css";
import { useNavigate } from "react-router-dom";

export default function CountriesVisited() {
  const [color, setColor] = useState("orange");
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  useEffect(() => {
    const handleThemeColorChange = () => {
      const rootStyle = getComputedStyle(document.documentElement);
      const newColor = rootStyle.getPropertyValue("--theme-color").trim();
      setColor(newColor);
    };

    handleThemeColorChange(); // Initialize with the current value
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={handleBack}>Back</button>
        <h2>Countries Visited</h2>
      </div>
      <p>
        It seems I have yet to see the world 😅. If you <strong>hire me</strong>
        , I will have the money to visit more countries 🌍. Don’t worry, I will
        bring you along 🫵🏼.
      </p>
      <WorldMap highlightColor={color} className={styles.map} />
    </div>
  );
}
