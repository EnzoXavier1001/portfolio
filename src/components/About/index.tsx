import * as C from './styles'
import enzoImg from '../../assets/dev-enzo-costa.png'

export const About = () => {
    return (
        <C.AboutContainer id='about'>
            <img src={enzoImg} alt="Enzo Costa" />
            <C.AboutContent>
                <h1>👋 Sobre mim</h1>
                <h2>Enzo da Costa Xavier</h2>
                <p>Olá, sou Enzo, programador com 2 anos de experiência e apaixonado por tecnologia. Tenho conhecimento em HTML, CSS, JavaScript, React.js, Next.js, PHP, MySQL, entre outras tecnologias. Também sou familiarizado com metodologias ágeis como Scrum e Kanban. Busco sempre criar soluções criativas e eficientes, focando na qualidade e na evolução constante como profissional.
</p>
            </C.AboutContent>
        </C.AboutContainer>
    )
}