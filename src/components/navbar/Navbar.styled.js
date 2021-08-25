import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    height: 3.5em;
    z-index:10;
    width: 100%;
    background: ${props=> (props.distancia>200)?'black':'none'};
    transition: 0.5s all;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:900px){
        margin-top: 3.5em;
        height: 100vh;
        background: rgba(0,0,0,0.5);
        backdrop-filter: blur(5px);
        display: block;
        transform: translateX(-100%);
    }
`;
export const Link = styled.a`
    color: var(--letra);
    height: 100%;
    text-decoration: none;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    letter-spacing: 0.1em;
    transition: 0.5s all;
    &:hover{
        background: var(--claro);
    }
    @media (max-width:900px){
        text-align:center;
        width: 100%;
        height: 100px;
    }
`;

export const Burger = styled.div`
    display: none;
    @media (max-width:900px){
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        background: rgba(0,0,0,0.5);
        color:white;
        font-size: 3em;
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        cursor: pointer;
        backdrop-filter: blur(5px);
        z-index:10;
        position: fixed;
        top: 0;
        right: 0;

    }
`