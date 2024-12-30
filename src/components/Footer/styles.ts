import styled from "styled-components";

export const FooterContainer = styled.footer`
    background: ${props => props.theme.colors['--blue-900']};
`

export const FooterContent = styled.div`
    max-width: 140rem;
    width: 90%;
    margin: 0 auto;
    color: #ccc;
    text-align: center;
    margin-top: 7.3rem;
    padding: 1.4rem 0;
`