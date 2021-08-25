import {Container,Text,Scrolldown,Icon} from './Banner.styled';

const Banner =()=>{
    const scroll = {
        color: 'black',
        position:'absolute',
        left:'50%',
        transform:'translateX(-50%)',
        bottom:'0'
    }
    return(
        <Container>
            <Text>Hi! My name is Josue</Text>
            <Text>I am a Web Developer</Text>
            <Scrolldown>
                <Icon className='fas fa-angle-double-down'></Icon>
                <h2 style={scroll}>Scroll Down</h2>
            </Scrolldown>
        </Container>
    )
}

export default Banner;