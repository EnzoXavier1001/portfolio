import styled from "styled-components";

export const ProjectsSection = styled.section`
    max-width: 140rem;
    color: ${props => props.theme.colors.white};
    margin: 0 auto;
    width: 90%;
    margin-top: 4.3rem;

    > h2 {
        font-size: 4.2rem;
    }
`

export const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.2rem;
    margin-top: 4.2rem;

    img {
        max-width: 100%;
        border-radius: 12px 12px 0 0;
        display: block;
        height: 20.0rem;
        object-fit: cover;
    }

    @media (max-width: 1230px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const CardProjects = styled.article`
    border-radius: 12px;
    color: #fff;

    display: flex;
    flex-direction: column;

    h2 {
        font-size: 2.6rem;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding: 1.8rem;
        background-color: ${props => props.theme.colors['--blue-900']};
        height: 25.0rem;
        border-radius: 0 0 12px 12px;
    }

    footer {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
    }

    a {
        background-color: ${props => props.theme.colors['--blue-300']};
        display: inline-block;
        text-decoration: none;
        border-radius: 0.3rem;
        color: ${props => props.theme.colors.white};
        padding: 1.2rem;
        transition: filter 0.3s linear;

        &:hover {
            filter: brightness(0.8);
        }
    }

`