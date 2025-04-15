import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ButtonGroup.module.css";

type ButtonGroupProps = {
  data: Task[];
  setData: React.Dispatch<React.SetStateAction<Task[]>>;
  onSort: (field: keyof Task, direction: "asc" | "desc") => void;
  onFilter: (field: keyof Task, value: string) => void;
  onSelectAll: () => void;
  onViewChange: (viewMode: "list" | "grid") => void;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  data,
  setData,
  onViewChange,
}) => {
  const [originalData, setOriginalData] = useState<Task[]>([]); // Preserve original data
  const [filterValue, setFilterValue] = useState<string>(""); // Value to filter by
  const [filterField, setFilterField] = useState<keyof Task>("title"); // Field to filter by
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false); // State for modal visibility
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc"); // Sort direction
  const [selectedItems, setSelectedItems] = useState<number[]>([]); // Selected items

  // Initialize original data on mount
  useEffect(() => {
    setOriginalData(data);
  }, [data]);

  // 1. Select All / Deselect All
  const handleSelectAll = () => {
    if (selectedItems.length === data.length) {
      setSelectedItems([]); // Deselect all tasks
    } else {
      const allTaskIds = data.map((task) => task.id); // Get all task IDs
      setSelectedItems(allTaskIds); // Select all tasks by their IDs
    }
  };

  useEffect(() => {
    console.log("Selected Task IDs:", selectedItems);
  }, [selectedItems]);

  // 2. Sort Data (toggle between asc/desc)
  const handleSort = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newDirection);

    const sortedData = [...data].sort((a, b) => {
      const fieldA = a[filterField]?.toString().toLowerCase() || "";
      const fieldB = b[filterField]?.toString().toLowerCase() || "";

      if (fieldA < fieldB) return newDirection === "asc" ? -1 : 1;
      if (fieldA > fieldB) return newDirection === "asc" ? 1 : -1;
      return 0;
    });

    console.log("Sorted Data:", sortedData); // Debugging log
    setData(sortedData);
  };

  // 3. Filter Data (case-insensitive search)
  const handleFilter = () => {
    if (!filterValue.trim()) {
      setData(originalData); // Reset to original data if filter is empty
      return;
    }

    const filteredData = originalData.filter((item) => {
      const fieldValue = item[filterField]; // Get the value of the filter field
      return (
        fieldValue &&
        fieldValue.toString().toLowerCase().includes(filterValue.toLowerCase())
      );
    });

    setData(filteredData);
    setIsFilterModalOpen(false); // Close modal after filtering
  };

  // 4. Toggle View Mode (list/grid)
  const handleView = (mode: "list" | "grid") => {
    onViewChange(mode); // Call the onViewChange prop to update the view mode in Tasks.tsx
  };

  return (
    <div>
      <div className="viewButtpn d-flex justify-content-end align-items-center mb-3 gap-3">
        <span>View</span>
        <button
          className={`btn ${styles.fw500} ${styles.buttonBG} bg-white fs-5 text-secondary py-2 px-3`}
          onClick={() => handleView("grid")} // Switch to grid view
        >
          <i className={`bi bi-grid ${styles.fw500}`}></i>{" "}
        </button>
        <button
          className={`btn ${styles.fw500} ${styles.buttonBG} bg-white fs-5 text-secondary py-2 px-3`}
          onClick={() => handleView("list")} // Switch to list view
        >
          <i className={`bi bi-list ${styles.fw500}`}></i>
        </button>
      </div>
      <div className="d-flex justify-content-end align-items-center mb-3 gap-3">
        <button
          className={`btn ${styles.fw500} ${styles.buttonBG} bg-white fs-5 text-secondary py-2 px-3`}
          onClick={handleSelectAll}
        >
          <i className={`bi bi-check2-square ${styles.fw500}`}></i> Select All
        </button>
        <button
          className={`btn ${styles.fw500} ${styles.buttonBG} bg-white fs-5 text-secondary py-2 px-3`}
          onClick={handleSort}
        >
          <i className={`bi bi-arrow-down-up ${styles.fw500}`}></i> Sort
        </button>
        <button
          className={`btn ${styles.fw500} ${styles.buttonBG} bg-white fs-5 text-secondary py-2 px-3`}
          onClick={() => setIsFilterModalOpen(true)}
        >
          <i className={`bi bi-sliders ${styles.fw500}`}></i> Filter
        </button>
        <button
          className={`btn ${styles.fw500} ${styles.buttonBG} bg-white fs-5 text-secondary py-2 px-3`}
        >
          <i className={`bi bi-three-dots-vertical ${styles.fw500}`}></i>
        </button>
      </div>

      {/* Filter Modal */}
      {isFilterModalOpen && (
        <div className="modal show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Filter Options</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsFilterModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="filterField" className="form-label">
                    Filter By
                  </label>
                  <select
                    id="filterField"
                    className="form-select"
                    value={filterField}
                    onChange={(e) =>
                      setFilterField(e.target.value as keyof Task)
                    }
                  >
                    <option value="title">Title</option>
                    <option value="description">Description</option>
                    <option value="status">Status</option>
                    <option value="priority">Priority</option>
                    <option value="assignedTo">Assigned To</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="filterValue" className="form-label">
                    Filter Value
                  </label>
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
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsFilterModalOpen(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleFilter}
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonGroup;
