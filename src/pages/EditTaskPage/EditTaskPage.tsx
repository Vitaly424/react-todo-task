import cls from './EditPage.module.scss';
import { Link, useParams } from 'react-router-dom';
import { EditTaskForm } from '@/features/EditTaskForm/EditTaskForm.tsx';

const EditTaskPage = () => {
    const { id } = useParams();

    if (!id) {
        return <h1 className={cls.title}>Задача не найдена</h1>;
    }

    return (
        <>
            <Link className={cls.link} to={'/'}>
                Вернуться на главную
            </Link>

            <h1 className={cls.title}>Редактировать задачу</h1>

            <EditTaskForm id={id} />
        </>
    );
};

export default EditTaskPage;
