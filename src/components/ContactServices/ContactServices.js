/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from 'react-i18next';
import { GrMapLocation } from "react-icons/gr";
import { BiLogoGmail } from "react-icons/bi";
import { MdPhoneInTalk } from "react-icons/md";

import './styles.css'

export const ContactServices = () => {
    const { t:translate } = useTranslation();
    
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

    return (
        <section id="contact" class="contact">
            <div class="container">
            <div class="section-title reveal" data-aos="fade-up">
                <h2>{translate('contact.title')}</h2>
                <p>{translate('contact.subtitle')}</p>
            </div>
        
            <div class="contact__content">
                <div
                class="col-lg-5 d-flex align-items-stretch justify-content-center"
                data-aos="fade-up"
                data-aos-delay="100"
                >
                <div class="info reveal">
                    <div class="address">
                        <i>
                            <GrMapLocation className='' />
                        </i>
                    <h4>{translate('contact.location')}:</h4>
                    <p>Embu das Artes - SP, Brasil</p>
                    </div>
        
                    <div class="email">
                    <i>
                        <BiLogoGmail />
                    </i>
                    <h4>{translate('contact.email')}:</h4>
                    <p>gabrielbrune52@gmail.com</p>
                    </div>
        
                    <div class="phone">
                    <a 
                        href={translate('home.invitationLink')}
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <i>
                            <MdPhoneInTalk />
                        </i>
                    </a>
                    <h4>{translate('contact.phone')}:</h4>
                    <p>+55 (11)96018-8549</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}