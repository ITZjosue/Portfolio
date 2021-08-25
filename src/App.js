import Navbar from './components/navbar/Navbar';
import {GlobalStyle} from './GlobalStyle';
import Banner from './components/banner/Banner';
import {Projects} from './components/myprojects/Projects';
import AboutMe from './components/aboutme/AboutMe';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
 
  return (
    <div className='container'>
      <Navbar/>
      <Banner/>
      <Projects/>
      <AboutMe/>
      <Contact/>
      <GlobalStyle/>
    </div>
  )};

export default App;
