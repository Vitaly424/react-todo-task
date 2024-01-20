import { Header } from '../Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import classNames from 'classnames';
import cls from './MainLayout.module.scss';

export const MainLayout = () => {
    return (
        <>
            <Header />

            <div className={classNames('container', cls.content)}>
                <Suspense fallback={<p>Загрузка...</p>}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    );
};
