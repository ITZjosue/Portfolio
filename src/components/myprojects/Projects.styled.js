import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    min-height: 100vh;
`;
export const Title =styled.h2`
    color: var(--letra);
    font-size: 5em;
    padding:50px 0px;
    text-align:center;
    @media (max-width:900px){
        font-size: 1.5em;
    }
`;
export const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    @media (max-width:900px){
        display: flex;
        flex-wrap: wrap;
    }
`;

// Contenedor de proyectos

export const Caja = styled.div`
    width: 100%;
    height: 500px;
    margin:auto;
    overflow: hidden;
    position: relative;
    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background:rgba(0,0,0,0.5);
        z-index:1;
    }
    @media (max-width:900px){
    }
`;

export const Descripcion = styled.div`
    color:white;
    position: absolute;
    height: 50%;
    width: 100%;
    transform: translateY(100%);
    background:rgba(0,0,0,0.5);
    bottom: 0;
    padding: 10px 5px;
    text-align:center;
    transition: 0.5s all;
    z-index:1;
    @media (max-width:900px){
        height: 70%;
    }
`;

export const Imagen = styled.img`
    width: 100%;
    height: 100%;
    object-fit:cover;
    transition: 0.5s all;
    transform: scale(1);
`;
export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform:translateX(-50%);
    width: 80%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;
export const Boton =styled.a`
    background:yellow;
    display: flex;
    background:var(--claro);
    align-items: center;
    justify-content: center;
    padding: 10px;
    text-decoration: none;
    color: var(--letra);
    border:transparent solid 2px;
    font-size: 1.2em;
    border-radius: 5px;
    &:hover{
        border:white 2px solid
    }
    @media (max-width:900px){
        font-size: 1em;
    }
`; 