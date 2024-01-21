import { StateSchema } from '@/store/types/StateSchema.ts';

export const data = (state: StateSchema) => state.task.data;
export const filteringData = (state: StateSchema) => state.task.filteringData;
