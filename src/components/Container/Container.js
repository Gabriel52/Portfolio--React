import React from 'react';
import i18next from 'i18next';
import { BrowserRouter as Router} from "react-router-dom";


import NavBar from '../NavBar/NavBar';
import { ShowCase } from "../ShowCase/ShowCase";
import { AboutSection } from "../AboutSection/AboutSection";
import { SectionService } from "../SectionService/SectionService";
import { PortfolioSection } from "../PortfolioSection/PortfolioSection";
import { ContactServices } from "../ContactServices/ContactServices";
import { Footer } from "../Footer/Footer";
import { initReactI18next } from 'react-i18next';
import { ENGLISH_LANGUAGE } from '../../translation/en-us';
import { PORTUGUESE_LANGUAGE } from '../../translation/pt-br';

i18next
.use(initReactI18next) 
.init({
    resources: {
        en:ENGLISH_LANGUAGE,
        ptBr:PORTUGUESE_LANGUAGE,
    },
    lng: "en", 
    fallbackLng: "en",
    returnObjects: true,
    
    interpolation: {
        escapeValue: false
}
})

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