import { useState } from "react";
import styles from "./Home.module.css";
import TaskPreview from "../TaskPreview/TaskPreview";

const CustomTasks = () => {
  const tasks = [
    { label: "To Do Task", count: 52 },
    { label: "In Progress Task", count: 42 },
    { label: "Ready for QA", count: 40 },
    { label: "Done", count: 32 },
  ];

  const users = [
    "https://placehold.co/32x32",
    "https://placehold.co/32x32",
    "https://placehold.co/32x32",
    "https://placehold.co/32x32",
  ];

  return (
    <div className="d-flex">
      <TaskPreview
        title="Product Design"
        category="Design"
        tasks={tasks}
        users={users}
      />
    </div>
  );
};

export default function Home() {
  const accordionData = [
    {
      id: 0,
      title: "Recently viewed",
      content: <CustomTasks />, // React component as content
    },
    {
      id: 1,
      title: "Ongoing tasks",
      content: <CustomTasks />, // Another React component as content
    },
  ];
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (id: number) => {
    setOpenItems(
      (prevOpenItems) =>
        prevOpenItems.includes(id)
          ? prevOpenItems.filter((itemId) => itemId !== id) // Close the item
          : [...prevOpenItems, id] // Open the item
    );
  };

  return (
    <div className={`${styles.home} ${styles.bgHeight} container pt-5`}>
      <div className="accordion" id="mainTask">
        {accordionData.map((item) => (
          <div className="accordion-item mb-5 border-0" key={item.id}>
            <h2 className="accordion-header" id={`heading${item.id}`}>
              <button
                className={`accordion-button ${styles.accordionButton}`}
                type="button"
                onClick={() => toggleItem(item.id)} // Toggle the item manually
                aria-expanded={openItems.includes(item.id) ? "true" : "false"}
                aria-controls={`collapse${item.id}`}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`collapse${item.id}`}
              className={`accordion-collapse collapse ${
                openItems.includes(item.id) ? "show" : ""
              }`}
              aria-labelledby={`heading${item.id}`}
            >
              <div className={`accordion-body ${styles.accordionBody}`}>
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// interface AccordionItem {
//   id: number;
//   title: string;
//   content: string;
// }

// export default function Home() {
//   const [accordionData, setAccordionData] = useState<AccordionItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/api/accordion-data"); // Replace with your API endpoint
//         const data = await response.json();
//         setAccordionData(data); // Set the fetched data
//         setLoading(false); // Set loading to false
//       } catch (error) {
//         console.error("Error fetching accordion data:", error);
//         setLoading(false); // Set loading to false even if there's an error
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>; // Show a loading message while fetching data
//   }

//   return (
//     <div className="home">
//       <Accordion defaultActiveKey="0">
//         {accordionData.map((item) => (
//           <Accordion.Item eventKey={item.id.toString()} key={item.id}>
//             <Accordion.Header>{item.title}</Accordion.Header>
//             <Accordion.Body>{item.content}</Accordion.Body>
//           </Accordion.Item>
//         ))}
//       </Accordion>
//     </div>
//   );
// }
