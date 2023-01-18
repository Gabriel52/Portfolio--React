
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import './styles.css'


export const SectionService = ()=> {
    const { t: translate} = useTranslation()
    const [technologiesList, setTechnologiesList] = useState()
    const addReveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach((reveal, index) => {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[index].getBoundingClientRect().top
            let revealPoint = 150;
            if(revealTop < windowHeight - revealPoint){
                reveals[index].classList.add('active');
            }else{
                reveals[index].classList.remove('active');
            }
        })
    }
    window.addEventListener('scroll', addReveal)

    useEffect(()=>{
        setTechnologiesList(translate("technologies.listTechnologies"))
    },[translate])
    
    return (
        <section id="services" className="services">
            <div className="container service">
            <div className="section-title reveal" data-aos="fade-up">
                <h2>{translate('technologies.title')}</h2>
                <p>{translate('technologies.subtitle')}</p>
            </div>

            <div className="service_content-card">
                {technologiesList?.map((technologiesItem) =>(
                    <div
                        className="align-items-stretch reveal"
                        key={technologiesItem.id}
                    >
                        <div className="icon-box">
                            <a target="_blank" href="https://nextjs.org/" rel="noreferrer">
                            <div className="icon"><i className="fab fa-react"></i></div>
                            <h4 className="title">
                                {technologiesItem.name}
                            </h4>
                            <p className="description">
                                {technologiesItem.description}
                            </p>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}