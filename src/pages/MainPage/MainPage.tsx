import cls from './MainPage.module.scss';
import { LuGrid } from 'react-icons/lu';
import { CiGrid2H } from 'react-icons/ci';
import classNames from 'classnames';
import { useState } from 'react';
import { TaskList } from '@/entities/TaskList/TaskList.tsx';
import { FilteredTask } from '@/features/FilteredTask/FilteredTask.tsx';

const MainPage = () => {
    const [isView, setIsView] = useState(false);

    const onChangeView = (isView: boolean) => {
        setIsView(isView);
    };

    return (
        <>
            <div className={cls.header}>
                <h1 className={cls.title}>Задачи</h1>

                <div className={cls.switcherGrid}>
                    <button onClick={() => onChangeView(true)}>
                        <LuGrid
                            size={30}
                            className={classNames({ [cls.small]: isView })}
                        />
                    </button>
                    <button onClick={() => onChangeView(false)}>
                        <CiGrid2H
                            className={classNames({ [cls.big]: !isView })}
                            size={30}
                        />
                    </button>
                </div>
            </div>

            <FilteredTask />
            <TaskList isView={isView} />
        </>
    );
};

export default MainPage;
