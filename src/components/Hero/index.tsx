import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import * as C from './styles'
import enzoImg from '../../assets/dev-enzo-costa.png'

export const Hero = () => {
    return (
        <C.HeroSection>
            <C.HeroContainer>
                <C.HeroAbout>
                    <h1>Enzo <br /> Xavier</h1>
                    <span>Front-end Developer | AEM Publisher | Cheil Brazil </span>

                    <C.SocialMedia>
                        <li><a href="https://github.com/EnzoXavier1001" target='_blank'><GithubLogo size={32} /></a></li>
                        <li><a href="https://www.linkedin.com/in/enzocosta07/" target='_blank'><LinkedinLogo size={32} /></a></li>
                    </C.SocialMedia>

                    <C.Button href='' target='_blank'>Download CV</C.Button>
                </C.HeroAbout>
                <img src={enzoImg} alt="Enzo Costa" />
            </C.HeroContainer>
        </C.HeroSection>
    )
}