import React from "react";
import './categories.css'
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.webp";
import Card from "./Card";
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

const Categories = () => {
  const categories = [
    { title: "Workouts For Men", img: img1 },
    { title: "Workouts For Women", img: img2 },
    { title: "Muscle Building", img: img3 },
    { title: "Fat Loss", img: img4 },
    { title: "Increase Strength", img: img5 },
    { title: "Ab Workouts", img: img6 },
    { title: "Full Body", img: img7 },
   
    
  ];
  return (
    <div style={{backgroundColor:'black',color:'white',textAlign:'center'}}>
    <div className="text-center pt-12 px-8 xl:px-12  mx-auto">
      <div className="max-w-[45rem] md:max-w-[65rem] mx-auto">
        {/* Title */}
        <p className="font-black text-[30px] sm:text-[35px] text-[#005599]">
          WORKOUT CATEGORIES
        </p>
        {/* Description */}
        <p className="text-[20px] pt-3">
          Choose a category that best suits the workout you're searching for.
          Once in the category, use the sort and filter options to find the
          right workout for your experience and goals.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div>
      <IconContext.Provider value={{ color: '#fff' }}>
                <Nav >
                    <NavbarContainer>
                        
                        <NavMenu>
                           

                          
                            <NavItem>
                                <NavLinksContact to='/excercisesformen'> Abs Workout :<br></br> We provide you with this list of best abs workout that will help you keep good health , simply click on this <span style={{color: 'aqua'}}>link</span> </NavLinksContact>
                            </NavItem>

                            <NavItem>
                                <NavLinksContact to='/toloosefat'>Ways to loose Fat : <br></br>Here are a few tips that will help reduce your weight and help you maintain a healthy body and as is said a healthy mind , simply click on this <span style={{color: 'aqua'}}>link</span></NavLinksContact>
                            </NavItem>
                            <NavItem>
                                <NavLinksContact to='/workout'>Workouts : <br></br>Some best leg workouts for your slim and fit legs, <br></br>simply click on this <br></br><span style={{color: 'aqua'}}>link</span> </NavLinksContact>
                            </NavItem>
                        </NavMenu>
                       
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
            <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

          
</div>
      {/* Categories */}
      <h3>These links include :</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4   lg:grid-cols-5 2xl:grid-cols-6   gap-x-4  gap-y-5 pt-6">
        {categories.map((category) => (
          <Card title={category.title} img={category.img} />
          
        ))}
      </div>
    </div>
    </div>
  );
};

export default Categories;