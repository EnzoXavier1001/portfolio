import * as C from './styles'

import javascriptIcon from '../../assets/javascript.svg'
import typescriptIcon from '../../assets/typescript.svg'
import reactIcon from '../../assets/react.svg'
import nodeIcon from '../../assets/nodejs.svg'
import gitIcon from '../../assets/git.svg'
import htmlIcon from '../../assets/html.svg'
import postgreIcon from '../../assets/postgresql.svg'
import cssIcon from '../../assets/css.svg'
import figmaIcon from '../../assets/figma.svg'

export const Skills = () => {
    const allTechnologies = [
        {
            icon: javascriptIcon,
            name: 'JavaScript'
        },
        {
            icon: typescriptIcon,
            name: 'TypeScript'
        },
        {
            icon: reactIcon,
            name: 'React'
        },
        {
            icon: nodeIcon,
            name: 'Node'
        },
        {
            icon: postgreIcon,
            name: 'PostgreSQL'
        },
        {
            icon: gitIcon,
            name: 'Git'
        },
        {
            icon: htmlIcon,
            name: 'HTML'
        },
        {
            icon: cssIcon,
            name: 'CSS'
        },
        {
            icon: figmaIcon,
            name: 'Figma'
        }
    ];

    return (
        <C.SkillsContainer>
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
