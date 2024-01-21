import cls from './EditTaskForm.module.scss';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { useAppDispatch } from '@/store/store.ts';
import { taskActions } from '@/store/Task/slices/taskSlice.ts';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { getTaskSelectors } from '@/store/Task/selectors';
import { useEffect, useState } from 'react';
import { StatusTaskSelect } from '@/entities/StatusTaskSelect/StatusTaskSelect.tsx';
import { StatusSelectOption } from '@/store/Task/types/taskSchema.ts';

interface FormValues {
    title: string;
    description: string;
}

interface EditTaskFormProps {
    id: string;
}

export const EditTaskForm = (props: EditTaskFormProps) => {
    const { id } = props;
    const taskList = useSelector(getTaskSelectors.data);

    const dispatch = useAppDispatch();
    const itemTask = taskList.find((item) => item.id === id);

    const [selectValue, setSelectValue] = useState<StatusSelectOption | null>();

    const {
        register,
        formState: { errors },
        setValue,
        handleSubmit,
    } = useForm<FormValues>({
        mode: 'onBlur',
    });

    useEffect(() => {
        if (itemTask) {
            setValue('title', itemTask.title);
            setValue('description', itemTask.description);
        }
    }, [id, itemTask, setValue, taskList]);

    if (!itemTask) {
        return <h1>Ошибка</h1>;
    }

    const onSubmit = handleSubmit((data) => {
        const editData = {
            id: id,
            title: data.title,
            description: data.description,
            status:
                selectValue?.value !== itemTask.status && selectValue
                    ? selectValue?.value
                    : itemTask.status,
        };

        dispatch(taskActions.updateTask(editData));

        toast('Сохранено', {
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
    });

    const onChangeStatus = (data: StatusSelectOption) => {
        setSelectValue(data);
    };

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

            <StatusTaskSelect
                defaultValue={itemTask.status}
                onChangeStatus={onChangeStatus}
            />

            <Button type={'submit'} className={cls.btn}>
                Сохранить
            </Button>

            <ToastContainer />
        </form>
    );
};
