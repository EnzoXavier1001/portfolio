import * as C from './styles'
import enzoImg from '../../assets/dev-enzo-costa.png'

export const About = () => {
    return (
        <C.AboutContainer id='about'>
            <img src={enzoImg} alt="Enzo Costa" />
            <C.AboutContent>
                <h1>👋 Sobre mim</h1>
                <h2>Enzo da Costa Xavier</h2>
                <p>Olá, sou Enzo, programador com 2 anos de experiência e apaixonado por tecnologia. Minha jornada na área de desenvolvimento começou com um curso técnico de Análise e Desenvolvimento de Sistemas (ADS) na ETEC, onde tive meu primeiro contato com a programação e o universo de TI.</p>
                <p>Ao longo dessa trajetória, adquiri experiência em diversas tecnologias, como HTML, CSS, JavaScript, React.js, Next.js, PHP, MySQL, entre outras. Sou também familiarizado com metodologias ágeis, como Scrum e Kanban, o que me permite colaborar de forma eficiente em equipes dinâmicas e focadas em resultados.</p>
                <p>Busco sempre criar soluções criativas e eficientes, com foco na qualidade do código e na evolução constante como profissional, para entregar o melhor valor aos projetos em que me envolvo.</p>
            </C.AboutContent>
        </C.AboutContainer>
    )
}