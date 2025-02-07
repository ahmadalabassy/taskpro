import Controls from "./Controls";
import SearchBar from "./SearchBar";
import Timer from "./Timer";

export default function Header() {
  return (
    <header style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between', padding: '1rem' }}>
      <SearchBar />
      <Timer />
      <Controls />    
    </header>
  )
}