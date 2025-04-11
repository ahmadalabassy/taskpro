import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./ButtonGroup.module.css";

// Define types for the data structure
type DataItem = {
  id: number;
  name: string;
};

// Define props for the ButtonGroup component
type ButtonGroupProps = {
  data: DataItem[];
  setData: React.Dispatch<React.SetStateAction<DataItem[]>>;
};

const ButtonGroup : React.FC<ButtonGroupProps> = ({ data, setData }) =>  {
  // State for filter input, sort direction, selected items, and view mode
  const [filterValue, setFilterValue] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

   // 1. Select All / Deselect All
   const handleSelectAll = () => {
    if (selectedItems.length === data.length) {
      setSelectedItems([]); // Deselect all
    } else {
      setSelectedItems(data.map((item) => item.id)); // Select all
    }
  };

  // 2. Customize (e.g., open a modal)
  const handleCustomize = () => {
    alert("Customize button clicked. Could open a modal here.");
  };

  // 3. Sort Data (toggle between asc/desc)
  const handleSort = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);

    const sortedData = [...data].sort((a, b) => {
      if (a.name < b.name) return newDirection === 'asc' ? -1 : 1;
      if (a.name > b.name) return newDirection === 'asc' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  };

  // 4. Filter Data (case-insensitive search)
  const handleFilter = () => {
    if (!filterValue.trim()) {
      // Reset to original data if filter is empty
      setData(data);
      return;
    }
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setData(filteredData);
  };

  // 5. Toggle View Mode (list/grid)
  const handleView = () => {
    const newViewMode = viewMode === 'list' ? 'grid' : 'list';
    setViewMode(newViewMode);
    alert(`Switched to ${newViewMode} view.`);
  };
  return (
    <div>
      <div className="viewButtpn d-flex justify-content-end align-items-center mb-3 gap-3"> 
        <span>View</span>
        <button className={`btn ${styles.fw500} bg-white fs-5 text-secondary py-2 px-3`} onClick={handleCustomize}><i className={`bi bi-grid ${styles.fw500}`}></i> </button>
        <button className={`btn ${styles.fw500} bg-white fs-5 text-secondary py-2 px-3`} onClick={handleCustomize}><i className={`bi bi-list ${styles.fw500}`}></i></button>
      </div>
      <div className="d-flex justify-content-end align-items-center mb-3 gap-3">
        <button className={`btn ${styles.fw500} bg-white fs-5 text-secondary py-2 px-3`} onClick={handleSelectAll}><i className={`bi bi-check2-square ${styles.fw500}`}></i> Select All</button>
        <button className={`btn ${styles.fw500} bg-white fs-5 text-secondary py-2 px-3`} onClick={handleCustomize}><i className={`bi bi-grid ${styles.fw500}`}></i> Customize</button>
        <button className={`btn ${styles.fw500} bg-white fs-5 text-secondary py-2 px-3`} onClick={handleSort}><i className={`bi bi-arrow-down-up ${styles.fw500}`}></i> Sort</button>
        <button className={`btn ${styles.fw500} bg-white fs-5 text-secondary py-2 px-3`} onClick={handleFilter}><i className={`bi bi-sliders ${styles.fw500}`}></i> Filter</button>
        <button className={`btn ${styles.fw500} bg-white fs-5 text-secondary py-2 px-3`} onClick={handleView}><i className={`bi bi-three-dots-vertical ${styles.fw500}`}></i></button>         
      </div>
    </div>
  );
};

export default ButtonGroup;