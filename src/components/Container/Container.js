import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";


import NavBar from '../NavBar/NavBar';
import { ShowCase } from "../ShowCase/ShowCase";
import { AboutSection } from "../AboutSection/AboutSection";
import { SectionService } from "../SectionService/SectionService";
import { PortfolioSection } from "../PortfolioSection/PortfolioSection";
import { ContactServices } from "../ContactServices/ContactServices";
import { Footer } from "../Footer/Footer";


export const Container = ()=> {
    return (
        <Router>
            <NavBar />
            <ShowCase/>
            <AboutSection />
            <SectionService/>
            <PortfolioSection />
            <ContactServices />
            <Footer />
        </Router>
    )
}