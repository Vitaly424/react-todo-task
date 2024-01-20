import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/assets/styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './app/providers/ErrorBoundary/ErrorBoundary.tsx';
import { AppRouterProvider } from '@/app/providers/RouterProvider/RouterProvider.tsx';
import { Provider } from 'react-redux';
import { store } from '@/store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <AppRouterProvider />
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>,
);
