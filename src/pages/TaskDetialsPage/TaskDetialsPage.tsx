import cls from './TaskDetialsPage.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTaskSelectors } from '@/store/Task/selectors/index.ts';
import { useMemo } from 'react';
import classNames from 'classnames';
import { formatToRussianDate } from '@/shared/utils/formattedDate.ts';
import { Tag } from '@/shared/ui/Tag/Tag.tsx';
import { mapTaskStatus } from '@/shared/const/TaskStatus.ts';

export const TaskDetialsPage = () => {
    const { id } = useParams();
    const tasks = useSelector(getTaskSelectors.data);

    const taskDetails = useMemo(() => {
        return tasks.find((item) => item.id === id);
    }, [id, tasks]);

    if (!taskDetails) {
        return <h1>Детальная страница не найдена</h1>;
    }

    const taskStatus = mapTaskStatus[taskDetails.status];

    return (
        <>
            <Link className={cls.link} to={'/'}>
                Вернуться на главную
            </Link>

            <div className={cls.TaskDetialsPage}>
                <div className={classNames(cls.item)}>
                    <div className={cls.title}>Название</div>
                    <div>{taskDetails?.title}</div>
                </div>

                <div className={classNames(cls.item)}>
                    <div className={cls.title}>Описание</div>
                    <div>{taskDetails?.description}</div>
                </div>

                <div className={classNames(cls.item)}>
                    <div className={cls.title}>Дата создания</div>
                    <div>{formatToRussianDate(taskDetails.date)}</div>
                </div>

                <div className={classNames(cls.item)}>
                    <div className={cls.title}>Статус</div>
                    <div>
                        <Tag
                            className={cls.status}
                            color={
                                taskDetails.status === 'completed'
                                    ? 'success'
                                    : 'danger'
                            }
                        >
                            {taskStatus}
                        </Tag>
                    </div>
                </div>
            </div>
        </>
    );
};
