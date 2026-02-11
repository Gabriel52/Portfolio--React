import "./styles.css";

import GitHubImg from '../../assets/gitHub.svg'
import WhatsappImg from '../../assets/whatsapp.svg'
import LinkedinImg from '../../assets/linkedin.svg'
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const {t:translate} = useTranslation();

    return (
        <footer id="footer">
            <section id="social" className="social">
            <div className="footer-top">
                <div className="container">
                <div
                    className="row justify-content-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <div className="footer-links">
                    <p>{translate('network.title')}:</p>
                    <div className="social-links">
                        <a 
                            target="_blank" 
                            href="https://www.linkedin.com/in/gabriel-brune-dos-santos-032b9717a/" rel="noreferrer"
                        >
                            <img src={LinkedinImg} alt="Linkedin logo" loading="lazy" decoding="async" />
                        </a>
                        <a 
                            target="_blank" 
                            href="https://api.whatsapp.com/send?phone=5511960188549&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20voc%C3%AA." rel="noreferrer"
                        >
                            <img src={WhatsappImg} alt="Whatsapp logo" loading="lazy" decoding="async" />
                        </a>
                        <a 
                            target="_blank" 
                            href="https://github.com/Gabriel52" rel="noreferrer"
                        >
                            <img src={GitHubImg} alt="Github logo" loading="lazy" decoding="async" />
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    
            <div className="container py-4">
            <div className="copyright">
                &copy; Copyright <strong><span>Gabriel Brune</span></strong> 2022
            </div>
            </div>
        </footer>
    )
}