import { TaskItem } from '@/entities/TaskItem/TaskItem.tsx';
import classNames from 'classnames';
import cls from './TaskList.module.scss';
import { useSelector } from 'react-redux';
import { getTaskSelectors } from '@/store/Task/selectors';

interface TaskListProps {
    isView: boolean;
}

export const TaskList = (props: TaskListProps) => {
    const { isView } = props;
    const filteringData = useSelector(getTaskSelectors.filteringData);

    if (!filteringData.length) {
        return <h1>Задач не найдено</h1>;
    }

    return (
        <div
            className={classNames(cls.list, {
                [cls.listSmall]: isView,
            })}
        >
            {filteringData.map((item) => (
                <TaskItem key={item.id} isView={isView} task={item} />
            ))}
        </div>
    );
};
