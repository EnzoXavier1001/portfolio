import styled from "styled-components";

export const ProjectsSection = styled.section`
    max-width: 112rem;
    color: ${props => props.theme.colors.white};
    margin: 0 auto;
    width: 90%;

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
        width: 100%;
    }
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const CardProjects = styled.article`
    border: 1px solid ${props => props.theme.colors['--blue-300']};
    padding: 3.2rem;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 480px;

    h2 {
        font-size: 2.6rem;
    }

    p {
        color: #ccc;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`