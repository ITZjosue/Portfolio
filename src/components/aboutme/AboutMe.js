import {Container,Aboutme,Text,Ball} from './AboutMe.styled';
const AboutMe =()=>{
    return(
        <Container id='About'>
            
            <Aboutme>
                <Text>I am a self-taught web developer who likes to build things with code.<br/><br/> Love learning new technologies that can help me improve my code skills.<br/><br/> Willing to take on challenges that can help me improve as a person and as a professional.<br/><br/>Love swimming and watch volleyball matches. </Text>
            </Aboutme>
            <Ball tam={'10px'} left={'0'} time={'5s'}/>
            <Ball tam={'10px'} left={'50%'} time={'2s'}/>
            <Ball tam={'25px'} left={'20%'} time={'3s'}/>
            <Ball tam={'15px'} left={'90%'} time={'4s'}/>
            <Ball tam={'10px'} left={'15%'} time={'25s'}/>
            
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
        </Container>
    )
}
export default AboutMe;