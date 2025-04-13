import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./ButtonGroup.module.css";
import { TaskData } from "../../typings/types";

// // Define types for the data structure
// type DataItem = {
//   id: number;
//   name: string;
// };

type ButtonGroupProps = {
  data: TaskData[];
  setData: React.Dispatch<React.SetStateAction<TaskData[]>>;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ data, setData }) => {
  const [filterValue, setFilterValue] = useState<string>('');
  const [filterField, setFilterField] = useState<'name' | 'id'>('name'); // State for filter field
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false); // State for modal visibility
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  // 1. Select All / Deselect All
  const handleSelectAll = () => {
    if (selectedItems.length === data.length) {
      setSelectedItems([]); // Deselect all tasks
    } else {
      const allTaskIds = data.map((task) => task.id); // Get all task IDs
      setSelectedItems(allTaskIds); // Select all tasks by their IDs
    }
    console.log("Selected Task IDs:", selectedItems);
  };
  useEffect(() => {
    console.log("Selected Task IDs:", selectedItems);
  }, [selectedItems]);
  // 2. Customize (e.g., open a modal)
  const handleCustomize = () => {
    alert("Customize button clicked. Could open a modal here.");
  };

  // 3. Sort Data (toggle between asc/desc)
  const handleSort = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);

    const sortedData = [...data].sort((a, b) => {
      if (a[filterField] < b[filterField]) return newDirection === 'asc' ? -1 : 1;
      if (a[filterField] > b[filterField]) return newDirection === 'asc' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  };

  // 4. Filter Data (case-insensitive search)
  const handleFilter = () => {
    if (!filterValue.trim()) {
      setData(data); // Reset to original data if filter is empty
      return;
    }
    const filteredData = data.filter((item) =>
      item[filterField].toString().toLowerCase().includes(filterValue.toLowerCase())
    );
    setData(filteredData);
    setIsFilterModalOpen(false); // Close modal after filtering
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
        <button className={`btn ${styles.fw500} bg-white fs-5 text-secondary py-2 px-3`} onClick={() => setIsFilterModalOpen(true)}><i className={`bi bi-sliders ${styles.fw500}`}></i> Filter</button>
        <button className={`btn ${styles.fw500} bg-white fs-5 text-secondary py-2 px-3`} onClick={handleView}><i className={`bi bi-three-dots-vertical ${styles.fw500}`}></i></button>         
      </div>

      {/* Filter Modal */}
      {isFilterModalOpen && (
        <div className="modal show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Filter Options</h5>
                <button type="button" className="btn-close" onClick={() => setIsFilterModalOpen(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="filterField" className="form-label">Filter By</label>
                  <select
                    id="filterField"
                    className="form-select"
                    value={filterField}
                    onChange={(e) => setFilterField(e.target.value as 'name' | 'id')}
                  >
                    <option value="name">Name</option>
                    <option value="id">ID</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="filterValue" className="form-label">Filter Value</label>
                  <input
                    id="filterValue"
                    type="text"
                    className="form-control"
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setIsFilterModalOpen(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleFilter}>Apply Filter</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonGroup;