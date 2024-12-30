import * as C from './styles'
import lpAdvogadaImg from '../../assets/landing-page-advogada.png'
import dashLimongi from '../../assets/dashboard-limongi.png'

export const Projects = () => {
    return (
        <C.ProjectsSection>
            <h2 id='projects'>Projetos</h2>
            <p>Projetos que eu desenvolvi ou já participei.</p>
            <C.ProjectsContainer>
                <C.CardProjects>
                    <img src={lpAdvogadaImg} alt="Dra Juliana Brassoli" />
                    <h2>Landing Page para Advogada</h2>
                    <p>Criação de uma Landing Page Responsiva, desenvolvida com HTML, CSS, JavaScript e Bootstrap, visando otimizar a experiência do usuário e garantir um design moderno e funcional.</p>
                    <footer>
                        <a href="https://julianabrassoli.com.br/" target='_blank'>Preview</a>
                        <a href="https://github.com/EnzoXavier1001/lp-juliana-bassoli" target='_blank'>Repositório</a>
                    </footer>
                </C.CardProjects>
                <C.CardProjects>
                    <img src={dashLimongi} alt="Dra Juliana Brassoli" />
                    <h2>Dashboard para Clínica de Oftalmologia</h2>
                    <p>Criação de um sistema web para os funcionários, permitindo a visualização de avaliações, agendamentos e dados de pacientes. </p>
                    <a href="https://julianabrassoli.com.br/" target='_blank'>Preview</a>
                </C.CardProjects>
                <C.CardProjects>
                    <img src={lpAdvogadaImg} alt="Dra Juliana Brassoli" />
                    <h2>Landing Page para Advogada</h2>
                    <p>Criação de uma Landing Page Responsiva, desenvolvida com HTML, CSS, JavaScript e Bootstrap, visando otimizar a experiência do usuário e garantir um design moderno e funcional.</p>
                    <a href="https://julianabrassoli.com.br/" target='_blank'>Preview</a>
                </C.CardProjects>
                <C.CardProjects>
                    <img src={lpAdvogadaImg} alt="Dra Juliana Brassoli" />
                    <h2>Landing Page para Advogada</h2>
                    <p>Criação de uma Landing Page Responsiva, desenvolvida com HTML, CSS, JavaScript e Bootstrap, visando otimizar a experiência do usuário e garantir um design moderno e funcional.</p>
                    <a href="https://julianabrassoli.com.br/" target='_blank'>Preview</a>
                </C.CardProjects>
            </C.ProjectsContainer>
        </C.ProjectsSection>
    )
}