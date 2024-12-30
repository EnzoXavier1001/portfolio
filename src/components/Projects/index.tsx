import * as C from './styles'
import lpAdvogadaImg from '../../assets/landing-page-advogada.png'
import dashLimongi from '../../assets/dashboard-limongi.png'
import coffeeDelivery from '../../assets/coffee-delivery.png'
import lpSamsung from '../../assets/landing-page-samsung.png'
import siteAlpi from '../../assets/site-alpi.png'
import expenseTracker from '../../assets/gerenciador-despesas.png'

export const Projects = () => {
    return (
        <C.ProjectsSection>
            <h2 id='projects'>Projetos</h2>
            <p>Projetos que eu desenvolvi ou já participei.</p>
            <C.ProjectsContainer>
                <C.CardProjects>
                    <img src={lpAdvogadaImg} alt="Dra Juliana Brassoli" />
                    <div>
                        <h2>Landing Page para Advogada</h2>
                        <p>Criação de uma Landing Page Responsiva, desenvolvida com HTML, CSS, JavaScript e Bootstrap, visando otimizar a experiência do usuário e garantir um design moderno e funcional.</p>
                        <footer>
                            <a href="https://julianabrassoli.com.br/" target='_blank'>Acessar</a>
                        </footer>
                    </div>
                </C.CardProjects>
                <C.CardProjects>
                    <img src={dashLimongi} alt="Dashboard para Clínica de Oftalmologia" />
                    <div>
                        <h2>Dashboard para Clínica de Oftalmologia</h2>
                        <p>Criação de um sistema web para os funcionários, permitindo a visualização de avaliações, agendamentos e dados de pacientes. </p>
                        <footer>
                            <a target='_blank' href='https://apps.apple.com/us/app/blefaroplastia/id6545101320'>Acessar</a>
                        </footer>
                    </div>
                </C.CardProjects>
                <C.CardProjects>
                    <img src={coffeeDelivery} alt="Coffee Delivery" />
                    <div>
                        <h2>Coffee Delivery</h2>
                        <p>Desafio desenvolvido após finalização do segundo módulo de React do curso Ignite da Rocketseat</p>
                        <footer>
                            <a href="https://lovely-genie-353eb2.netlify.app/" target='_blank'>Acessar</a>
                        </footer>
                    </div>
                </C.CardProjects>
                <C.CardProjects>
                    <img src={lpSamsung} alt="Samsung Brasil" />
                    <div>
                        <h2>Landing Page de Campanha</h2>
                        <p>Criação de uma <strong>Landing Page responsiva</strong> focada na apresentação de uma nova linha de TVs, combinando tecnologia de ponta com um design moderno e intuitivo. Desenvolvido com Adobe Experience Mananger.</p>
                        <footer>
                            <a href="https://www.samsung.com/br/campaign/tv-all-in-1/" target='_blank'>Acessar</a>
                        </footer>
                    </div>
                </C.CardProjects>
                <C.CardProjects>
                    <img src={siteAlpi} alt="Alpi Distribuidora" />
                    <div>
                        <h2>Site de distribuidora de alimentos</h2>
                        <p>Desenvolvimento de um site responsivo para distribuidora de alimentos, focado na exibição de produtos, informações nutricionais e imagens.</p>
                        <footer>
                            <a href="https://alpidistribuidora.com.br/" target='_blank'>Acessar</a>
                        </footer>
                    </div>
                </C.CardProjects>
                <C.CardProjects>
                    <img src={expenseTracker} alt="Gerenciador de Despesas" />
                    <div>
                        <h2>Gerenciador de despesas</h2>
                        <p>Desenvolvimento de um site responsivo para distribuidora de alimentos, focado na exibição de produtos, informações nutricionais e imagens.</p>
                        <footer>
                            <a href="https://objective-goldstine-8c1183.netlify.app/" target='_blank'>Acessar</a>
                        </footer>
                    </div>
                </C.CardProjects>
            </C.ProjectsContainer>
        </C.ProjectsSection>
    )
}