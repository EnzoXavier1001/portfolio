import styled from "styled-components";

export const CarrerSection = styled.section``

export const CarrerContainer = styled.div`
    max-width: 112rem;
    margin: 0 auto;
    color: #fff;
    width: 90%;


    > h2 {
        font-size: 4.2rem;
        text-align: center;
    }
`

export const CarrerWrapper = styled.div``

export const CardArticle = styled.article`
    border: 1px solid ${props => props.theme.colors['--blue-300']};
    padding: 1.8rem;
    border-radius: 12px;

    margin: 4rem 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.2rem;

    height: 30rem;
    transition: all 0.3s ease;

    p {
        color: #ccc;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &:hover {
        background-color: ${props => props.theme.colors['--blue-300']};
    }

`

export const EducationWrapper = styled.div``

export const CarrerContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;

    margin-top: 4.4rem;

    @media (max-width: 1141px) {
        grid-template-columns: repeat(1, 1fr);
    }
`