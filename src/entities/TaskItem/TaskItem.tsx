import cls from './TaskItem.module.scss';
import { MdDelete } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import classNames from 'classnames';
import { Task } from '@/store/Task/types/taskSchema.ts';
import { mapTaskStatus } from '@/shared/const/TaskStatus.ts';
import { Tag } from '@/shared/ui/Tag/Tag.tsx';
import { useNavigate } from 'react-router-dom';
import { formatToRussianDate } from '@/shared/utils/formattedDate.ts';
import { useAppDispatch } from '@/store/store.ts';
import { taskActions } from '@/store/Task/slices/taskSlice.ts';

interface TaskItemProps {
    task: Task;
    isView: boolean;
}

export const TaskItem = (props: TaskItemProps) => {
    const { task, isView } = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const taskStatus = mapTaskStatus[task.status];

    const nextEditPage = () => {
        navigate(`/task/${task.id}/edit`);
    };

    const onDeleteTaskItem = () => {
        dispatch(taskActions.deleteTaskItem({id: task.id}))
    }

    return (
        <div
            className={classNames(cls.TaskItem, {
                [cls.TaskItemSmall]: isView,
            })}
        >
            <div
                className={classNames(cls.item, {
                    [cls.itemSmall]: isView,
                })}
            >
                <div className={cls.title}>Название</div>
                <div>{task.title}</div>
            </div>
            <div
                className={classNames(cls.item, {
                    [cls.itemSmall]: isView,
                })}
            >
                <div className={cls.title}>Дата создания</div>
                <div>{formatToRussianDate(task.date)}</div>
            </div>
            <div
                className={classNames(cls.item, {
                    [cls.itemSmall]: isView,
                })}
            >
                <div className={cls.title}>Статус</div>
                <div>
                    <Tag
                        color={
                            task.status === 'completed' ? 'success' : 'danger'
                        }
                    >
                        {taskStatus}
                    </Tag>
                </div>
            </div>
            <div
                className={classNames(cls.item, {
                    [cls.itemSmall]: isView,
                })}
            >
                <div className={cls.actions}>
                    <button onClick={onDeleteTaskItem}>
                        <MdDelete
                            className={classNames(cls.delete)}
                            size={30}
                        />
                    </button>
                    <button onClick={nextEditPage}>
                        <CiEdit className={classNames(cls.edit)} size={30} />
                    </button>
                </div>
            </div>
        </div>
    );
};
