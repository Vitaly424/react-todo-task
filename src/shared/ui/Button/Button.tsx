import cls from './Button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    className?: string;
}

export const Button = (props: ButtonProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <button className={classNames(cls.button, className)} {...otherProps}>
            {children}
        </button>
    );
};
