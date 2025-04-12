export const getStatusLabel = (status: string): string => {
  switch (status) {
    case "in-progress":
      return "In Progress";
    case "on-hold":
      return "On Hold";
    case "completed":
      return "Completed";
    default:
      return status;
  }
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case "in-progress":
      return "#4285f4";
    case "on-hold":
      return "#f4a742";
    case "completed":
      return "#34a853";
    default:
      return "#6c757d";
  }
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
