import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TaskEditModal.module.css";

interface Task {
  assignee: string;
  leadProject: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  tags: string[];
  file: File | null;
}

const EditTaskModal = () => {
  const [task, setTask] = useState<Task>({
    assignee: "",
    leadProject: "",
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    tags: [],
    file: null,
  });

  const assignees = ["Insan Kamil", "John Doe", "Jane Smith"];
  const projects = ["Miguel Lorenzo", "Emily Brown", "Michael Lee"];
  const availableTags = ["Web Design", "User Research", "Development", "Testing"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setTask({ ...task, file: e.target.files[0] });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setTask({ ...task, file });
  };

  const handleTagToggle = (tag: string) => {
    setTask((prevTask) => {
      const tags = prevTask.tags.includes(tag)
        ? prevTask.tags.filter((t) => t !== tag)
        : [...prevTask.tags, tag];
      return { ...prevTask, tags };
    });
  };
  const handleSaveTask = async () => {
    const formData = new FormData();
    formData.append("assignee", task.assignee);
    formData.append("leadProject", task.leadProject);
    formData.append("title", task.title);
    formData.append("startDate", task.startDate);
    formData.append("endDate", task.endDate);
    formData.append("description", task.description);
    formData.append("tags", JSON.stringify(task.tags));
    if (task.file) {
      formData.append("file", task.file);
    }
  
    try {
      const response = await fetch("https://your-api-endpoint.com/tasks", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to save task");
      }
  
      const result = await response.json();
      console.log("Task saved successfully:", result);
      alert("Task saved successfully!");
    } catch (error) {
      console.error("Error saving task:", error);
      alert("Failed to save task. Please try again.");
    }
  };
  

  const handleReset = () => {
    setTask({
      assignee: "",
      leadProject: "",
      title: "",
      startDate: "",
      endDate: "",
      description: "",
      tags: [],
      file: null,
    });
  };

  return (
    <div className="container p-4 rounded bg-white">
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Assign to</label>
          <select className="form-select" name="assignee" value={task.assignee} onChange={handleChange}>
            <option value="">Select Assignee</option>
            {assignees.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Lead Project</label>
          <select className="form-select" name="leadProject" value={task.leadProject} onChange={handleChange}>
            <option value="">Select Project</option>
            {projects.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <label className="form-label">Task Title</label>
          <input type="text" className="form-control" name="title" value={task.title} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Start Date</label>
          <input type="date" className="form-control" name="startDate" value={task.startDate} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">End Date</label>
          <input type="date" className="form-control" name="endDate" value={task.endDate} onChange={handleChange} />
        </div>
        <div className="col-12">
          <label className="form-label">Tags</label>
          <div>
            {availableTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`btn btn-sm me-2 ${task.tags.includes(tag) ? "btn-primary" : "btn-outline-secondary"}`}
                onClick={() => handleTagToggle(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className={`col-12`} autoFocus>
          <label className="form-label">Upload Document</label>
          <div
            className={`border p-4 text-center rounded bg-light`}
            style={{ borderStyle: "dashed", cursor: "pointer" }}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <i className={`bi bi-cloud-arrow-up fs-2 text-secondary`}></i>
            <p className="fw-bold">Choose a file or drag & drop it here.</p>
            <p className="text-muted">txt, docx, pdf, jpeg, xlsx - Up to 50MB</p>
            <input type="file" className="d-none" id="fileInput" onChange={handleFileUpload} />
            <label className="btn btn-outline-primary" htmlFor="fileInput">Browse files</label>
            {task.file && <p className="mt-2">Selected file: {task.file.name}</p>}
          </div>
        </div>
        <div className="col-12">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" value={task.description} onChange={handleChange}></textarea>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-outline-secondary" onClick={() => console.log("Draft Saved")}>Save as Draft</button>
        <button className="btn btn-danger" onClick={handleReset}>Reset Data</button>
        <button className="btn btn-primary" onClick={handleSaveTask}>Save Task</button>
      </div>
    </div>
  );
};

export default EditTaskModal;