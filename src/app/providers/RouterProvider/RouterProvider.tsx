import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@/shared/layouts/MainLayout/MainLayout.tsx';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AddTaskPage } from '@/pages/AddTaskPage';
import { EditTaskPage } from '@/pages/EditTaskPage';
import { TaskDetialsPage } from '@/pages/TaskDetialsPage/TaskDetialsPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            {
                path: '/new-task',
                element: <AddTaskPage />,
            },
            {
                path: '/task/:id/edit',
                element: <EditTaskPage />,
            },
            {
                path: '/task/:id',
                element: <TaskDetialsPage />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]);

export const AppRouterProvider = () => {
    return <RouterProvider router={router} />;
};
