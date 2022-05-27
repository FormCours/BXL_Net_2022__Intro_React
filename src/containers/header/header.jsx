import logo from './logo.png';
import style from './header.module.css';

const Header = () => {

    const content = 'Demo • Liste de tache';

    return (
        <header className={style.header}>
            <img src={logo} alt='Site Logo' />
            <div className={style.title} title={content}>
                {content}
            </div>
        </header>
    );
};

export default Header;