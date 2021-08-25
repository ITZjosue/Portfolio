import {Container,Title,Media,Footer,Redes} from './Contact.styled';
import {Ball} from '../aboutme/AboutMe.styled.js';
const Contact = ()=>{
    return(
        <Container id='contact'>
           <Title>Feel free to shoot through an email or view my folio</Title>
           <Media>
                <p>SAY HI!</p><br/>
                <a target='_blank' style={{textDecoration:'none',color:'black'}} href='https://mail.google.com/mail/u/0/#inbox?compose=new'>itzjosue99@gmail.com</a>
                <br/>
                <p>VIEW PORTFOLIO</p><br/>
                <a target='_blank' style={{textDecoration:'none',color:'black'}} href='#'>Donwload PDF</a>
           </Media>    
           <Redes>
              <a href='https://api.whatsapp.com/send?phone=990003088&text=Hola,estoy interesado en trabajar contigo'target='_blank'><i className='fab fa-whatsapp'></i></a>
              <a href='https://github.com/ITZjosue' target='_blank'><i className='fab fa-github'></i></a>
              <a href='https://codepen.io/itzjosue' target='_blank'><i className='fab fa-codepen'></i></a>
           </Redes>
           <Footer>
               <h4 style={{letterSpacing:'5px',zIndex:'1'}}> Josue Lamas &copy; 2021</h4>
               <Ball tam={'10px'} left={'0'} time={'5s'}/>
               <Ball tam={'10px'} left={'50%'} time={'2s'}/>
            <Ball tam={'25px'} left={'20%'} time={'3s'}/>
            <Ball tam={'15px'} left={'90%'} time={'4s'}/>
            <Ball tam={'10px'} left={'15%'} time={'25s'}/>
            <Ball tam={'20px'} left={'5%'} time={'45s'}/>
            <Ball tam={'10px'} left={'13%'} time={'16s'}/>
            <Ball tam={'10px'} left={'0'} time={'10s'}/>
            <Ball tam={'10px'} left={'2%'} time={'7s'}/>
            <Ball tam={'10px'} left={'3%'} time={'15s'}/>
            <Ball tam={'10px'} left={'50%'} time={'15s'}/>
            <Ball tam={'15px'} left={'35%'} time={'5s'}/>

            <Ball tam={'10px'} left={'60%'} time={'7s'}/>
            <Ball tam={'35px'} left={'45%'} time={'9s'}/>
            <Ball tam={'15px'} left={'88%'} time={'14s'}/>


            <Ball tam={'10px'} left={'14%'} time={'30s'}/>
            <Ball tam={'15px'} left={'40%'} time={'22s'}/>
            <Ball tam={'15px'} left={'88%'} time={'9s'}/>
            
            <Ball tam={'20px'} left={'14%'} time={'25s'}/>
            <Ball tam={'10px'} left={'40%'} time={'16s'}/>
            <Ball tam={'15px'} left={'88%'} time={'21s'}/>

            <Ball tam={'22px'} left={'81%'} time={'36s'}/>
            <Ball tam={'10px'} left={'77%'} time={'2s'}/>
            <Ball tam={'15px'} left={'64%'} time={'12s'}/>
            
            <Ball tam={'10px'} left={'60%'} time={'25s'}/>
            <Ball tam={'10px'} left={'45%'} time={'16s'}/>
            <Ball tam={'15px'} left={'88%'} time={'21s'}/>

            
            <Ball tam={'10px'} left={'85%'} time={'25s'}/>
            <Ball tam={'10px'} left={'90%'} time={'19s'}/>
            <Ball tam={'15px'} left={'75%'} time={'14s'}/>
           </Footer>
        </Container>
    )
}
export default Contact;