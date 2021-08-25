import {Container,Link,Burger} from './Navbar.styled';
import {useEffect,useState} from 'react';
const Navbar = ()=>{

    const [dist,setDist] = useState(0);
    const [bar,setBar] = useState('false');

    const cambio = ()=>{
        setBar(!bar)
    }
    
    useEffect(()=>{
        let nav = document.getElementById('navbar');
        if(bar){
            nav.style.transform = 'translateX(0%)';
        }else{
            nav.style.transform = 'translateX(-100%)';
        }
    },[bar])

    const handleScroll = ()=>{
        let position = window.pageYOffset;
        setDist(position);
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
    },[dist])

    return(
        <>
        <Burger id='menu' onClick={cambio}><i className='fa fa-bars'></i></Burger>
        <Container distancia={dist} id='navbar'>
                <Link href='#'>Home</Link>
                <Link href='#proyectos'>Projects</Link>
                <Link href='#About'>About me</Link>
                <Link href='#contact'>Contact</Link>
        </Container>
        </>
    )
}

export default Navbar;