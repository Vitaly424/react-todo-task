import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskSchema } from '../types/taskSchema.ts';

const initialState: TaskSchema = {
    data: [
        {
            id: '634',
            title: 'Строка',
            description: 'Описание',
            status: 'completed',
            date: new Date(),
        },
        {
            id: '123',
            title: 'Строка',
            description: 'Описание',
            status: 'in-progress',
            date: new Date(),
        },
    ],
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.data.push(action.payload);
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
        },
    },
});

export const { actions: taskActions } = taskSlice;
export const { reducer: taskReducer } = taskSlice;
