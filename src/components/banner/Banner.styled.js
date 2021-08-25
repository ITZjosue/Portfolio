import styled, { keyframes } from 'styled-components';

const aparecer = keyframes`
    from{
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;
export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    position: relative;
    animation: ${aparecer} forwards 5s ease;
    &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        backdrop-filter:blur(5px) ;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
    }
`;

export const Text = styled.h1`
    color: var(--letra);
    letter-spacing: 0.2em;
    text-align:center;
    z-index: 5;
    margin: 10px;
    @media (max-width:900px){
        font-size: 1.5em;
    }
`;

const rebotar = keyframes`
    0%{
        bottom: 15px;
    }
    50%{
        bottom: 25px;
    }
    100%{
        bottom: 15px;
    }
`;

export const Scrolldown = styled.div`
    position: absolute;
    bottom: 15px;
    width: 40%;
    border-radius: 2em;
    height: 10em;
    background: var(--letra);
    opacity: 0.5;
    animation: ${rebotar} 2s infinite ease-in-out;
    @media (max-width:900px){
        width: 80%;
    }
`;

export const Icon = styled.i`
    color:var(--claro);
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(50%);
    font-size: 5em;
`; 