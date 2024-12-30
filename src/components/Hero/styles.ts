import styled from "styled-components";

export const HeroSection = styled.section`
    color: #fff;
    height: 100vh;
    display: flex;
    align-items: center;
    max-width: 112rem;
    width: 90%;
    margin: 0 auto;
`

export const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    img {
        height: 40rem;
        clip-path: circle();
    }

    @media (max-width: 990px) {
        gap: 2.4rem;
        flex-direction: column;

        > img {
            height: 30rem;
        }
    }
`

export const HeroAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;

    h1 {
        font-size: 8.2rem;
        line-height: 1.1;
        max-width: 300px;
    }

    span {
        font-size: 1.8rem;
        color: #ccc;
    }

    @media (max-width: 990px) {
        order: 1;
        justify-content: center;
        text-align: center;
        align-items: center;

        > h1 {
            font-size: 4.2rem;
        }
    }

`

export const SocialMedia = styled.ul`
    display: flex;
    align-items: center;
    gap: 1.2rem;

    li a {
        color: #ccc;
    }
`

export const Button = styled.a`
    display: inline-block;
    background-color: ${props => props.theme.colors['--blue-600']};
    padding: 1.4rem 1.8rem;
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    border-radius: 8px;
    border: 1px solid transparent;
    transition: all 0.3s ease-in;

    &:hover {
        background: transparent;
        border: 1px solid ${props => props.theme.colors['--blue-600']};
    }
`