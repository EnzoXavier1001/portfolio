import styled from "styled-components";

export const AboutContainer = styled.section`
    max-width: 140rem;
    margin: 16.8rem auto;

    color: ${props => props.theme.colors.white};
    display: flex;
    gap: 3.2rem;
    align-items: center;
    width: 90%;

    > img {
        height: 60.0rem;
    }

    h1 {
        font-size: 1.7rem;
        background-color: ${props => props.theme.colors['--blue-900']};
        display: inline-block;
        padding: 0.8rem 1.4rem;
        border-radius: 12px;
        color: ${props => props.theme.colors['--blue-300']};
        font-weight: bold;
    }

    h2 {
        font-size: 4.8rem;
        margin: 1.4rem 0;
    }

    @media (max-width: 1200px) {
        flex-direction: column;
        text-align: center;

        > img {
            height: 50.0rem;
        }
    }

    @media (max-width: 500px) {
        > img {
            height: 30.0rem;
        }
    }
`

export const AboutContent = styled.div`
    p {
        color: #ccc;
        font-size: 1.8rem;
        margin-bottom: 1.4rem;
    }
`