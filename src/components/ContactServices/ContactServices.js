/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from 'react-i18next';
import { GrMapLocation } from "react-icons/gr";
import { BiLogoGmail } from "react-icons/bi";
import { MdPhoneInTalk } from "react-icons/md";

import './styles.css';

export const ContactServices = () => {
    const { t: translate } = useTranslation();

    return (
        <section id="contact" className="contact">
            <div className="container">
            <div className="section-title reveal" data-aos="fade-up">
                <h2>{translate('contact.title')}</h2>
                <p>{translate('contact.subtitle')}</p>
            </div>
        
            <div className="contact__content">
                <div
                className="col-lg-5 d-flex align-items-stretch justify-content-center"
                data-aos="fade-up"
                data-aos-delay="100"
                >
                <div className="info reveal">
                    <div class="address">
                        <i>
                            <GrMapLocation className='' />
                        </i>
                    <h4>{translate('contact.location')}:</h4>
                    <p>Taboão da Serra - SP, Brasil</p>
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