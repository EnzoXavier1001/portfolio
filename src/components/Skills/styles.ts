import styled from "styled-components";

export const SkillsContainer = styled.section`
    max-width: 112rem;
    margin: 0 auto;
    width: 90%;

    margin-bottom: 8.0rem;

    color: #fff;
    text-align: center;

    h1 {
        margin-bottom: 0.8rem;
        font-size: 4.2rem;
    }

    p {
        color: #ccc;
        font-size: 1.8rem;
    }
`

export const SkillsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.8rem;
    padding: 4.2rem 0;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.2rem;
    }

    img {
        height: 6.4rem;
    }
`