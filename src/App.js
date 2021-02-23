import React from 'react';
import AccordionSection from './components/AccordionSection/AccordionSection';
import AccordionFaqSection from './components/AccordionSection/AccordionFaqSection';
import ComparationSection from './components/ComparationSection/ComparationSection';
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MainInfoSection from './components/MainInfoSection/MainInfoSection';
import MainInfoSectionReverse from "./components/MainInfoSection/MainInfoSectionReverse";
import CustomServiceSection from './components/CustomServiceSection/CustomServiceSection';
import Footer from"./components/Footer/Footer";

const App = () => (
    <div className="wrapper">
            <Header></Header> {/*Page heading */}
            <HeroSection></HeroSection>{/*Hero banner*/}
            <ComparationSection></ComparationSection>{/*Section with main material items */}
            <MainInfoSection></MainInfoSection>{/*Article with main information */}
            <MainInfoSectionReverse></MainInfoSectionReverse>{/*Article with main information */}
            <AccordionSection></AccordionSection>{/*Article with main information */}
            <AccordionFaqSection></AccordionFaqSection>{/*Article with FQA information */}
            <CustomServiceSection></CustomServiceSection>{/*Article with service information */}
            <Footer></Footer> {/*page footer */}
    </div>

);

export default App;
