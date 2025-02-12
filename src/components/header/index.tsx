import React from 'react';
import Controls from "./Controls";
import SearchBar from "./SearchBar";
import Timer from "./Timer";

export default function Header() {
  return (
    <header >
      <SearchBar />
      <Timer />
      <Controls />    
    </header>
  )
}