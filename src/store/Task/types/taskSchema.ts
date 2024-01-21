export type TaskLabel = 'Завершена' | 'В процессе' | 'Все';
export type TaskStatus = 'completed' | 'in-progress' | 'all';

export interface StatusSelectOption {
    value: TaskStatus;
    label: TaskLabel;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    date: Date;
}

export interface TaskSchema {
    data: Task[];
    filteringData: Task[];
}
