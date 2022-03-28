import './style.scss'

export const Header = () => {
    return (
        <header className="header">
            <nav className="container">
                <h1 className="logo">Enzo Costa</h1>
                <ul className="menu-list">
                    <li className="menu-list__item"><a href="#about">Sobre mim</a></li>
                    <li className="menu-list__item"><a href="#projects">Projetos</a></li>
                    <li className="menu-list__item"><a href="#skills">Habilidades</a></li>
                </ul>
            </nav>
        </header>
    )
}