import * as C from './styles'
import logoImg from '../../assets/logo.png'

export const Header = () => {
    return (
        <C.Header>
            <C.Container>
                <C.Menu>
                    <C.Brand>
                        <img src={logoImg} alt="Enzo Xavier" />
                    </C.Brand>
                    <C.MenuList>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#skills">Habilidades</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#carrer">Carreira</a></li>
                    </C.MenuList>
                </C.Menu>
            </C.Container>
        </C.Header>
    )
}