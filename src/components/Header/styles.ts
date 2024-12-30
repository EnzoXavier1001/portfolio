import styled from "styled-components";

export const Header = styled.header`
    position: absolute;
    top: 30px;
    right: 0;
    width: 100%;
    z-index: 2;

    @media (max-width: 990px) {
        display: none;
    }
`

export const Container = styled.div`
    max-width: 140rem;
    margin: 0 auto;
    background-color: ${props => props.theme.colors['--blue-900']};
    padding: 0.6rem 2.4rem;
    border-radius: 16px;
`

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Brand = styled.div`
    img {
        height: 40px;
    }
`

export const MenuList = styled.ul`
    list-style: none;

    display: flex;
    align-items: center;
    gap: 2.0rem;

    li a {
        color: ${props => props.theme.colors.white};
        text-decoration: none;
        transition: all .3s ease-in;
        position: relative;
    }

    li a:hover {
        color: ${props => props.theme.colors['--blue-300']};
    }

    li a:hover::after {
        width: 100%;
    }

    li a::after {
        content: '';
        width: 0;
        display: block;
        position: absolute;
        bottom: 0;
        border-bottom: 1px solid ${props => props.theme.colors['--blue-300']};
        transition: all .3s ease-in;
    }
`