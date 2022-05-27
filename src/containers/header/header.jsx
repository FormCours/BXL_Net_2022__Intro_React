import logo from './logo.png';
import style from './header.module.css';

const Header = (props) => {
    // Récuperation des données des attributs
    const content = props.content;

    // Rendu d'un header
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