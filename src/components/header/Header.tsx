import React from "react";

import Controls from "./Controls/Controls.tsx";
import SearchBar from "./SearchBar/SearchBar.tsx";
import Timer from "./Timer/Timer.tsx";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <SearchBar />
      <Timer />
      <Controls />
    </header>
  );
}
