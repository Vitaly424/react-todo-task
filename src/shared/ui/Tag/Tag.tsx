import { HTMLAttributes, ReactNode } from 'react';
import cls from './Tag.module.scss';
import classNames from 'classnames';
import { Mods } from '@/shared/types/Mods.ts';

export type TagColor = 'success' | 'danger';

interface TagProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    color?: TagColor;
}

export const Tag = (props: TagProps) => {
    const { children, className, color = 'success', ...otherProps } = props;

    const mods: Mods = {
        [cls[color]]: color,
    };

    return (
        <div className={classNames(cls.Tag, className, mods)} {...otherProps}>
            {children}
        </div>
    );
};
