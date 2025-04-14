type Task = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  status: string;
  assignedTo: string;
  comments: string[];
  files: File[];
  createdAt: string;
  updatedAt: string;
  progress: number;
  members: User[];
  completedDate: string;
};

type User = {
  id?: number;
  name?: string;
  role?: string;
  email?: string;
  image?: string;
  supervisor?: string;
  phone?: string;
  department?: string;
  address?: string;
  active?: boolean;
  tasks?: Task[];
  plannedLeavesDate?: string;
  joinDate?: string;
  comments?: string[];
  files?: File[];
  createdAt?: string;
  updatedAt?: string;
};
