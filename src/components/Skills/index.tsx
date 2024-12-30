import { allTechnologies } from '../../utils/icons';
import * as C from './styles'

export const Skills = () => {
    return (
        <C.SkillsContainer id='skills'>
            <h1>Habilidades</h1>
            <p>Habilidades e tecnologias que eu trabalho</p>

            <C.SkillsWrapper>
                {allTechnologies.map((tech, index) => (
                    <div key={index}>
                        <img src={tech.icon} alt={tech.name} />
                        <span>{tech.name}</span>
                    </div>
                ))}
            </C.SkillsWrapper>
        </C.SkillsContainer>
    );
}
