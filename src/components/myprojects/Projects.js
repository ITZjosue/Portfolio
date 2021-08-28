import React,{useEffect} from 'react';
import {Container,Caja,Title,ProjectContainer,Imagen,Descripcion,Boton,ButtonContainer} from './Projects.styled';
export const Projects = () => {

    useEffect(()=>{
        const cajas = document.querySelectorAll('.caja');
        cajas.forEach((caja)=>{
            caja.addEventListener('mouseover',()=>{
                let img = caja.childNodes[0];
                let div = caja.childNodes[1];
                img.style.transform = 'scale(1.1)';
                div.style.transform = 'translateY(0%)';
            })
            caja.addEventListener('mouseleave',()=>{
                let img = caja.childNodes[0];
                let div = caja.childNodes[1];
                img.style.transform = 'scale(1)';
                div.style.transform = 'translateY(100%)';
            })
        })
    },[]);
    
    const ptyles = {
        textAlign:'center',
        width:'80%',
        margin:'15px auto',
        fontSize:'1.1em'
    }
    const icono = {
        fontSize: '2em',
        letterSpacing:'5px'
    }
    return (
        <>
        <Container id='proyectos'>
        
            <Title>My Projects</Title>
            <ProjectContainer>



                <Caja className='caja'>
                    <Imagen className='imagen' src='https://i.postimg.cc/3RpFdB5v/chatapp.png'/>
                    <Descripcion className='descripcion'>
                        <h2>Real Time Chat App</h2>
                        <p style={ptyles}>A chat app where you can register and start a conversation with another registered user</p>
                        <div style={icono}><i className="fab fa-html5"></i> <i className="fab fa-css3-alt"></i> <i className='fab fa-js-square'></i> <i className='fab fa-php'></i></div>
                        <ButtonContainer>
                            <Boton target='_blank' href='https://josuechatapp.000webhostapp.com/'>Live Demo</Boton>
                            <Boton target='_blank' href='https://github.com/ITZjosue/PHP_CHAT_APP'>Repository</Boton>
                        </ButtonContainer>
                    </Descripcion>
                </Caja>

                <Caja className='caja'>
                    <Imagen className='imagen' src='https://i.postimg.cc/QC3k5Thn/Draw.png'/>
                    <Descripcion className='descripcion'>
                        <h2>Drawing app</h2>
                        <p style={ptyles}>A drawing application made using JS, HTML5 and CSS</p>
                        <div style={icono}><i className="fab fa-html5"></i> <i className="fab fa-css3-alt"></i> <i className='fab fa-js-square'></i> </div>
                        <ButtonContainer>
                            <Boton target='_blank' href='https://itzjosue.github.io/Drawing-App/'>Live Demo</Boton>
                            <Boton target='_blank' href='https://github.com/ITZjosue/Drawing-App'>Repository</Boton>
                        </ButtonContainer>
                    </Descripcion>
                </Caja>

                <Caja className='caja'>
                    <Imagen className='imagen' src='https://i.postimg.cc/zXqHK1st/Captura.png'/>
                    <Descripcion className='descripcion'>
                        <h2>Movie Info App</h2>
                        <p style={ptyles}>An application where you can search any movie you want to know the information about. The information comes from a movie API.</p>
                        <div style={icono}><i className="fab fa-html5"></i> <i className="fab fa-css3-alt"></i> <i className='fab fa-js-square'></i> <i className="fab fa-react"></i></div>
                        <ButtonContainer>
                            <Boton target='_blank' href='https://vigorous-wing-a25aba.netlify.app/'>Live Demo</Boton>
                            <Boton target='_blank' href='https://github.com/ITZjosue/movie_info_app'>Repository</Boton>
                        </ButtonContainer>
                    </Descripcion>
                </Caja>

                <Caja className='caja'>
                    <Imagen className='imagen' src='https://i.postimg.cc/X7P6k219/weatherapp.png'/>
                    <Descripcion className='descripcion'>
                        <h2>Weather App</h2>
                        <p style={ptyles}>An app that tells you the weather of any city you write in the search bar</p>
                        <div style={icono}><i className="fab fa-html5"></i> <i className="fab fa-css3-alt"></i> <i className='fab fa-js-square'></i> <i className="fab fa-react"></i></div>
                        <ButtonContainer>
                            <Boton target='_blank' href='https://itzjosue.github.io/Weather_app/'>Live Demo</Boton>
                            <Boton target='_blank' href='https://github.com/ITZjosue/Weather_app'>Repository</Boton>
                        </ButtonContainer>
                    </Descripcion>
                </Caja>
            </ProjectContainer>
            
        </Container>
        </>
    )
}
