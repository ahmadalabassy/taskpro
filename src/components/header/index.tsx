import React from 'react';
import Controls from "./Controls";
import SearchBar from "./SearchBar";
import Timer from "./Timer";
import React from 'react';
export default function Header() {
  return (
    <header >
      <SearchBar />
      <Timer />
      <Controls />    
    </header>
  )
}