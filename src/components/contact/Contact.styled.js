import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    margin-top: 100vh;
    z-index:-1;
    bottom: 0;
    position: fixed;
    background: var(--claro);
`; 
 
export const Title = styled.h1`
    color: black;
    width: 30%;
    font-size: 3em;
    letter-spacing: 5px;
    height: 500px;
    position: absolute;
    bottom: 10%;
    left: 5%;
    font-family: 'Oswald', sans-serif;
    @media (max-width:900px){
        font-size: 1.8em;
        letter-spacing: 1px;
        padding: 10px;
        width: 100%;
        text-align:center;
        left: 0;
    }
`;

export const Media = styled.div`
    position: absolute;
    right: 0;
    font-size: 1.3em;
    font-weight: bold;
    bottom: 45%;
    width: 40%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width:900px){
        width:100%;
        left: 0;
        bottom: 20%;
        text-align:center;
    }
`;

export const Footer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    color:var(--letra);
    justify-content: center;
    align-items: center;
    background: var(--oscuro);
    position: absolute;
    bottom: 0;
    overflow: hidden;
`;

export const Redes = styled.div`
    position: absolute;
    width: 100%;
    bottom: 10%;
    right: 0;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3em;
    a{
        color:black;
    }
    i{
        padding: 15px;
        &:hover{
            color: white;
        }
    }
`;