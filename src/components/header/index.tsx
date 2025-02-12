import Controls from "./controls";
import SearchBar from "./SearchBar";
import Timer from "./Timer";
import React from 'react';
export default function Header() {
  return (
    <header style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between', padding: '1rem' }}>
      <SearchBar />
      <Timer />
      <Controls />    
    </header>
  )
}