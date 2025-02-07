import Controls from "./Controls";
import SearchBar from "./SearchBar";
import Timer from "./Timer";

export default function Header() {
  return (
    <header style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', margin:'0 auto', width:'100%'}}>
      <SearchBar />
      <Timer />
      <Controls />    
    </header>
  )
}