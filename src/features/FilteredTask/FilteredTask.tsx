import { StatusSelectOption } from '@/store/Task/types/taskSchema.ts';
import { FilterTaskSelect } from '@/entities/FilterTaskSelect/FilterTaskSelect.tsx';
import cls from './FilteredTask.module.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/store/store.ts';
import { useSelector } from 'react-redux';
import { getTaskSelectors } from '@/store/Task/selectors';

export const FilteredTask = () => {
    const [search, setSearch] = useState('');
    const dispatch = useAppDispatch();
    const tasks = useSelector(getTaskSelectors.data);

    const onChangeStatus = (data: StatusSelectOption) => {
        console.log('onChangeStatus', data);
    };

    useEffect(() => {
        console.log('tasks', tasks);
        // if (search) {
        // }
    }, [search]);

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
                defaultValue={'all'}
            />
        </div>
    );
};
