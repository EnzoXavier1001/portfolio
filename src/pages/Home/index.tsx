import { Carrer } from "../../components/Carrer"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { Projects } from "../../components/Projects"

export const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Carrer />
            <Projects />
        </>
    )
}