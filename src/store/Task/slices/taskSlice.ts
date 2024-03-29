import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskSchema } from '../types/taskSchema.ts';
import { TASK_KEY } from '@/shared/const/localStorage.ts';

const getTaskLocalStorage: Task[] = localStorage.getItem(TASK_KEY)
    ? JSON.parse(localStorage.getItem(TASK_KEY) || '')
    : [];
const initialState: TaskSchema = {
    data: getTaskLocalStorage,
    filteringData: getTaskLocalStorage,
    // data: [
    //     {
    //         id: '34761',
    //         title: 'Задача',
    //         description: 'Описание',
    //         status: 'in-progress',
    //         date: new Date(),
    //     },
    //     {
    //         id: '5471',
    //         title: 'Список',
    //         description: 'Описание',
    //         status: 'in-progress',
    //         date: new Date(),
    //     },
    //     {
    //         id: '45722',
    //         title: 'Зарядка',
    //         description: 'Описание',
    //         status: 'completed',
    //         date: new Date(),
    //     },
    //     {
    //         id: '236214',
    //         title: 'Летний',
    //         description: 'Описание',
    //         status: 'completed',
    //         date: new Date(),
    //     },
    //     {
    //         id: '35243',
    //         title: 'Список',
    //         description: 'Описание',
    //         status: 'completed',
    //         date: new Date(),
    //     },
    // ],
    // filteringData: [
    //     {
    //         id: '34761',
    //         title: 'Задача',
    //         description: 'Описание',
    //         status: 'in-progress',
    //         date: new Date(),
    //     },
    //     {
    //         id: '5471',
    //         title: 'Список',
    //         description: 'Описание',
    //         status: 'in-progress',
    //         date: new Date(),
    //     },
    //     {
    //         id: '45722',
    //         title: 'Зарядка',
    //         description: 'Описание',
    //         status: 'completed',
    //         date: new Date(),
    //     },
    //     {
    //         id: '236214',
    //         title: 'Летний',
    //         description: 'Описание',
    //         status: 'completed',
    //         date: new Date(),
    //     },
    //     {
    //         id: '35243',
    //         title: 'Список',
    //         description: 'Описание',
    //         status: 'completed',
    //         date: new Date(),
    //     },
    // ],
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.data.push(action.payload);
            state.filteringData.push(action.payload);

            localStorage.setItem(TASK_KEY, JSON.stringify(state.data));
        },
        updateTask: (state, action: PayloadAction<Omit<Task, 'date'>>) => {
            state.data = state.data.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        ...action.payload,
                    };
                }

                return item;
            });

            state.filteringData = state.filteringData.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        ...action.payload,
                    };
                }

                return item;
            });

            localStorage.setItem(TASK_KEY, JSON.stringify(state.data));
        },
        deleteTaskItem: (state, action: PayloadAction<{ id: string }>) => {
            state.data = state.data.filter(
                (item) => item.id !== action.payload.id,
            );

            state.filteringData = state.filteringData.filter(
                (item) => item.id !== action.payload.id,
            );

            localStorage.setItem(TASK_KEY, JSON.stringify(state.data));
        },
        filtersTask: (state, action: PayloadAction<Task[]>) => {
            state.filteringData = action.payload;
        },
    },
});

export const { actions: taskActions } = taskSlice;
export const { reducer: taskReducer } = taskSlice;
