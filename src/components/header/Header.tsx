import React from "react";
// import Controls from "./Controls";
import SearchBar from "../SearchBar/SearchBar";
import Timer from "../Timer/Timer";
import Controls from "../Controls/Controls";

export default function Header() {
  return (
    <header>
      <SearchBar />
      <Timer />
      <Controls />
    </header>
  );
}
