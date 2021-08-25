import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: black;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    overflow: hidden;
    margin-bottom: 100vh;
`;

const buble = keyframes`
    from{
        bottom:-50px;
    }
    to{
        bottom: 100%;
    }
`;

export const Ball = styled.div`
    width: ${props => props.tam};
    height: ${props => props.tam};
    background: var(--claro);
    position: absolute;
    bottom: -20%;
    left: ${props => props.left};
    border-radius: 50%;
    animation:${buble} infinite ${props=> props.time} 5s;
    animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
    filter: blur(3px);
`; 
export const Aboutme = styled.div`
    width: 50%;
    height: auto;
    background: rgba(255,255,255,0.1);
    z-index: 1;
    border-radius: 5px;
    backdrop-filter: blur(20px);
    text-align:left;
    padding: 20px 20px 20px 30px;
    display: flex;
    align-items: center;
    @media (max-width:900px){
        width: 80%;
    }
`;

export const Text = styled.p`
    font-size: 1.8em;
    color: var(--letra);
    @media (max-width:900px){
        font-size: 1em;
    }
`;