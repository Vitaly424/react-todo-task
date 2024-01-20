import cls from './Header.module.scss';
import Logo from '@/app/assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui/Button/Button.tsx';

export const Header = () => {
    const navigate = useNavigate();

    return (
        <header className={cls.header}>
            <div className={cls.logo}>
                <img width={70} src={Logo} alt="Логотип" />
                <p className={cls.text}>Список задач</p>
            </div>
            <div>
                <Button onClick={() => navigate('/new-task')}>
                    Добавить новую задачу
                </Button>
            </div>
        </header>
    );
};
