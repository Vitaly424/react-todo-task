import {
    StatusSelectOption,
    TaskStatus,
} from '@/store/Task/types/taskSchema.ts';
import { FilterTaskSelect } from '@/entities/FilterTaskSelect/FilterTaskSelect.tsx';
import cls from './FilteredTask.module.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/store/store.ts';
import { useSelector } from 'react-redux';
import { getTaskSelectors } from '@/store/Task/selectors';
import { taskActions } from '@/store/Task/slices/taskSlice.ts';

export const FilteredTask = () => {
    const [search, setSearch] = useState('');
    const dispatch = useAppDispatch();
    const [selectStatus, setSelectStatus] = useState<TaskStatus>('all');
    const tasks = useSelector(getTaskSelectors.data);

    const onChangeStatus = (data: StatusSelectOption) => {
        setSelectStatus(data.value);
    };

    useEffect(() => {
        let filteredTasks = tasks;

        if (search) {
            filteredTasks = filteredTasks.filter((item) =>
                item.title
                    .toLowerCase()
                    .trim()
                    .includes(search.toLowerCase().trim()),
            );
        }

        if (selectStatus !== 'all') {
            filteredTasks = filteredTasks.filter(
                (item) => item.status === selectStatus,
            );
        }

        if (!search && selectStatus === 'all') {
            dispatch(taskActions.filtersTask(tasks));
            return;
        }

        dispatch(taskActions.filtersTask(filteredTasks));
    }, [dispatch, search, selectStatus, tasks]);

    return (
        <div className={cls.FilteredTask}>
            <input
                className={cls.input}
                type={'text'}
                placeholder={'Поиск по названию'}
                onChange={(e) => setSearch(e.target.value)}
            />

            <FilterTaskSelect
                onChangeStatus={onChangeStatus}
                defaultValue={selectStatus}
            />
        </div>
    );
};
