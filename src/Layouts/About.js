import React from 'react';
import PageSlider from '../Components/PageSlider';
import PrimaryMenu from '../Components/PrimaryMenu';
import MiniAbout from '../Components/MiniAbout';
import Footer from '../Components/Footer';

const About = () => {
    return ( 
        <div>
            <PrimaryMenu />
            <PageSlider bannertitle="About Us"  /> 
            <MiniAbout />
            <Footer/>              
        </div>
     );
}
 
export default About;