import React from "react";

import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className="position-relative">
      <input
        className="searchInput"
        placeholder="Search Tasks ..."
        type="text"
      />
      <span className={styles.searchIcon}>
        <i className="bi bi-search"></i>
      </span>
    </div>
  );
}
