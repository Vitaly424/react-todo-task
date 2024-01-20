import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './Task/slices/taskSlice.ts';
import { StateSchema } from '@/store/types/StateSchema.ts';
import { useDispatch } from 'react-redux';

export const store = configureStore<StateSchema>({
    reducer: {
        task: taskReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
