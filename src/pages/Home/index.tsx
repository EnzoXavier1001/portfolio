import { About } from "../../components/About"
import { Carrer } from "../../components/Carrer"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { Projects } from "../../components/Projects"
import { Skills } from "../../components/Skills"

export const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Skills />
            <About />
            <Carrer />
            <Projects />
        </>
    )
}