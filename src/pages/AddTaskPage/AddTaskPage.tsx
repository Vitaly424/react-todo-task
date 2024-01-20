import { AddTaskForm } from '@/features/AddTaskForm/AddTaskForm.tsx';
import cls from './AddPageTask.module.scss';
import { Link } from 'react-router-dom';

const AddTaskPage = () => {
    return (
        <>
            <Link className={cls.link} to={'/'}>Вернуться на главную</Link>

            <h1 className={cls.title}>Добавить задачу</h1>

            <AddTaskForm />
        </>
    );
};

export default AddTaskPage;
