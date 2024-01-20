import { StateSchema } from '@/store/types/StateSchema.ts';

export const data = (state: StateSchema) => state.task.data;
