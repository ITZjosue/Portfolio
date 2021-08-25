import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --oscuro: black;
        --claro:rgba(247,19,221,0.8);
        --letra: #fff;
    }
    
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Merriweather', serif;
    }
    html{
        scroll-behavior: smooth;
        ::-webkit-scrollbar{
          width: 5px;
          background:#011C26;
        }
        ::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,0.8); 
        border-radius: 10px;
    }
    }
`;