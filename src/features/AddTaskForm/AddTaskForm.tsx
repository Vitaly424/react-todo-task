import cls from './AddTaskForm.module.scss';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { useAppDispatch } from '@/store/store.ts';
import { taskActions } from '@/store/Task/slices/taskSlice.ts';
import uuid from 'react-uuid';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { Task } from '@/store/Task/types/taskSchema.ts';

interface FormValues {
    title: string;
    description: string;
}

export const AddTaskForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<FormValues>({
        mode: 'onBlur',
    });

    const dispatch = useAppDispatch();

    const onSubmit = handleSubmit((data) => {
        const newTask: Task = {
            id: uuid(),
            title: data.title,
            description: data.description,
            status: 'in-progress',
            date: new Date(),
        };

        dispatch(taskActions.addTask(newTask));

        toast('Новая задача добавлена', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            type: 'success',
        });

        reset();
    });

    return (
        <form className={cls.form} onSubmit={onSubmit}>
            <div className={cls.field}>
                <input
                    {...register('title', {
                        required: true,
                    })}
                    className={classNames(cls.input, {
                        [cls.inputError]: errors?.title,
                    })}
                    type={'text'}
                    placeholder={'Введите название'}
                    // onChange={onChangeTitle}
                />

                {errors?.title && (
                    <span className={cls.error}>Поле не может быть пустым</span>
                )}
            </div>
            <div className={cls.field}>
                <textarea
                    {...register('description', {
                        required: true,
                    })}
                    className={classNames(cls.textarea, {
                        [cls.inputError]: errors?.description,
                    })}
                    name={'description'}
                    placeholder={'Введите описание'}
                />

                {errors?.description && (
                    <span className={cls.error}>Поле не может быть пустым</span>
                )}
            </div>

            <Button type={'submit'} className={cls.btn}>
                Добавить новую задачу
            </Button>

            <ToastContainer />
        </form>
    );
};
