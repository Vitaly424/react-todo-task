import { TaskStatus } from '@/store/Task/types/taskSchema.ts';

export const mapTaskStatus: Record<TaskStatus, string> = {
    completed: 'Завершена',
    'in-progress': 'В процессе',
    all: 'Все',
};
