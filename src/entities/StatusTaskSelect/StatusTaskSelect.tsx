import {
    StatusSelectOption,
    TaskStatus,
} from '@/store/Task/types/taskSchema.ts';
import Select from 'react-select';
import cls from './StatusSelect.module.scss';
import classNames from 'classnames';

interface StatusSelectProps {
    className?: string;
    onChangeStatus?: (status: StatusSelectOption) => void;
    defaultValue: TaskStatus;
}

export const options: StatusSelectOption[] = [
    { value: 'completed', label: 'Завершена' },
    { value: 'in-progress', label: 'В процессе' },
];

export const StatusTaskSelect = (props: StatusSelectProps) => {
    const { className, onChangeStatus, defaultValue } = props;

    const filteredValues = options.find((item) => item.value === defaultValue);

    const onChange = (data: StatusSelectOption) => {
        onChangeStatus?.(data);
    };

    return (
        <Select
            className={classNames(cls.StatusSelect, className)}
            onChange={(data) => onChange(data as StatusSelectOption)}
            options={options}
            defaultValue={filteredValues}
        />
    );
};
