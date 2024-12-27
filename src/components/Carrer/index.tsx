import { academic } from '../../data/academic'
import { works } from '../../data/work'
import { Card } from '../Card'
import * as C from './styles'

export const Carrer = () => {
    return (
        <C.CarrerSection id='carrer'>
            <C.CarrerContainer>
                <h2>Minha carreira</h2>

                <C.CarrerContent>
                <C.CarrerWrapper>
                    <h2>Carreira profissional</h2>
                    {works.map((data, key) => (
                        <Card 
                            key={key}
                            title={data.title} 
                            description={data.description} 
                            currentDate={data.currentDate}
                            startedDate={data.startedDate}
                        />
                    ))}
                </C.CarrerWrapper>
                <C.EducationWrapper>
                    <h2>Carreira acadêmica</h2>
                    {academic.map((data, key) => (
                        <Card 
                            key={key}
                            title={data.title} 
                            description={data.description} 
                            currentDate={data.currentDate}
                            startedDate={data.startedDate}
                        />
                    ))}
                </C.EducationWrapper>
                </C.CarrerContent>
            </C.CarrerContainer>
        </C.CarrerSection>
    )
}