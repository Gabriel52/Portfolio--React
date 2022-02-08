import "./styles.css";

import GitHubImg from '../../assets/gitHub.svg'
import WhatsappImg from '../../assets/whatsapp.svg'
import LinkedinImg from '../../assets/linkedin.svg'

export const Footer = () => {
    return (
        <footer id="footer">
            <section id="social" class="social">
            <div class="footer-top">
                <div class="container">
                <div
                    class="row justify-content-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <div class="footer-links">
                    <p>Onde me encontrar:</p>
                    <div class="social-links">
                        <a 
                            target="_blank" 
                            href="https://www.linkedin.com/in/gabriel-brune-dos-santos-032b9717a/" rel="noreferrer"
                        >
                            <img src={LinkedinImg} alt="Linkedin logo"/>
                        </a>
                        <a 
                            target="_blank" 
                            href="https://api.whatsapp.com/send?phone=5511960188549&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20voc%C3%AA." rel="noreferrer"
                        >
                            <img src={WhatsappImg} alt="Whatsapp logo"/>
                        </a>
                        <a 
                            target="_blank" 
                            href="https://github.com/Gabriel52" rel="noreferrer"
                        >
                            <img src={GitHubImg} alt="Github logo"/>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    
            <div class="container py-4">
            <div class="copyright">
                &copy; Copyright <strong><span>Gabriel Brune</span></strong> 2022
            </div>
            </div>
        </footer>
    )
}