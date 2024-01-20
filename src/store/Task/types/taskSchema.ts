export type TaskStatus = 'completed' | 'in-progress';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    date: Date;
}

export interface TaskSchema {
    data: Task[];
}
