
import React, { useState } from 'react';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import { homeObjOne, homeObjTwo, homeObjFour} from '../InfoSection/Data';
import Navbar from '../Navbar'; 
import Features from '../Features';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import './index.css'
import Categories from './categories';
import Featurecoms from '../Featurecoms';

const Home = () => {
const[isOpen, setIsOpen] = useState(false);

const toggle = () =>{
    setIsOpen(!isOpen);
};

    return (
        <div>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <HeroSection />
                
                
                <Features />
                <Featurecoms />
                <InfoSection {...homeObjTwo}/>
                <InfoSection {...homeObjOne}/>
                
  
                <InfoSection {...homeObjFour}/>
                <Categories />
                <Footer />
        </div>
    );
};

export default Home