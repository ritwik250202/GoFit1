import React, { useState } from 'react';

import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLinksContact
} from '../Navbar/NavbarElements';


import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';
const Featurecoms = () => {
  

  return (
   <div style={{textAlign:'centre'}}>

      <IconContext.Provider value={{ color: '#fff' }}>
                <Nav >
                    <NavbarContainer>
                        
                        <NavMenu>
                           

                         <div style={{fontSize:18}}>
                        <NavItem>
                                <NavLinksContact to='/'>All the best for the beginning of the fitness journey, CLICK on the following links to explore!</NavLinksContact>
                            </NavItem>
                            </div>  
                            <NavItem>
                                <NavLinksContact to='/calorie'> Calorie Calculator App    </NavLinksContact>
                            </NavItem>

                            <NavItem>
                                <NavLinksContact to='/equipments'>Equipments</NavLinksContact>
                            </NavItem>
                            <NavItem>
                                <NavLinksContact to='/bmi'>BMI Calculator</NavLinksContact>
                            </NavItem>
                        </NavMenu>
                       
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
            </div>
    
  );
};

export default Featurecoms;