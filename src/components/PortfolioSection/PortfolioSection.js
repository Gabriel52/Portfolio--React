import './styles.css'
import { useTranslation } from 'react-i18next'
import { FaGithub } from "react-icons/fa";
import { IoIosDesktop } from "react-icons/io";

import AluraQuizImg from '../../assets/screen-alura.png'
import BeTheHeroImg from '../../assets/screen-be-the-hero.png'
import ProjectClockImg from '../../assets/screen-relogio.png'
import ProffyImg from '../../assets/screen-proffy.png'
import EcoletaImg from '../../assets/screen-ecoleta.png'
export const PortfolioSection = ()=> {
    const { t: translate} = useTranslation()


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
        <section id="portfolio" class="portfolio">
            <div class="container">
                <div class="section-title reveal" data-aos="fade-up">
                <h2>{translate('projects.title')}</h2>
                <p>{translate('projects.subtitle')}</p>
                </div>
                <div
                class="portfolio-container"
                data-aos="fade-up"
                data-aos-delay="200"
                >
                <div class="col-lg-4 col-md-6 portfolio-item filter-react reveal">
                    <div class="portfolio-wrap">
                    <img
                        src={AluraQuizImg}
                        class="img-fluid"
                        alt="Alura Quiz - Git Hub"
                    />
                    <div class="portfolio-links">
                        <a
                        href="https://github.com/Gabriel52/imersao_alura"
                        class="venobox"
                        title="Alura Quiz - Git Hub"
                        >
                            <FaGithub />
                        </a>
                        <a
                        href="https://imersao-alura-pi.vercel.app/"
                        title="Alura Quiz - Hospedagem"
                        target="_blank" rel="noreferrer"
                        ><IoIosDesktop /></a>
                    </div>
                    <div class="portfolio-info">
                        <h4>Alura Quiz</h4>
                        <p>Next JS</p>
                    </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item filter-react reveal">
                    <div class="portfolio-wrap">
                    <img
                        src={ProjectClockImg}
                        class="img-fluid"
                        alt=""
                    />
                    <div class="portfolio-links">
                        <a
                        href="https://github.com/Gabriel52/Projetos_JS/tree/master/Relogio"
                        title="Hora do dia"
                        target="_blank" rel="noreferrer"
                        ><FaGithub /></a>
                    </div>
                    <div class="portfolio-info">
                        <h4>Hora do dia</h4>
                        <p>Javascript</p>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-html reveal">
                    <div class="portfolio-wrap">
                    <img
                        src={BeTheHeroImg}
                        class="img-fluid"
                        alt=""
                    />
                    <div class="portfolio-links">
                        <a
                        href="https://github.com/Gabriel52/Be-The-Hero"
                        data-gall="portfolioGallery"
                        class="venobox"
                        title="Be the hero"
                        ><FaGithub /></a>
                    </div>
                    <div class="portfolio-info">
                        <h4>Be The Hero</h4>
                        <p>React JS</p>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-html reveal">
                    <div class="portfolio-wrap">
                    <img
                        src={ProffyImg}
                        class="img-fluid"
                        alt=""
                    />
                    <div class="portfolio-links">
                        <a
                        href="https://github.com/Gabriel52/Proffy"
                        data-gall="portfolioGallery"
                        class="venobox"
                        title="Proffy - Git Hub"
                        ><IoIosDesktop /></a>
                        <a
                        href="https://stupefied-turing-6a35f2.netlify.app/"
                        title="Proffy - Hospedagem"
                        target="_blank" rel="noreferrer"
                        ><FaGithub /></a>
                    </div>
                    <div class="portfolio-info">
                        <h4>Proffy</h4>
                        <p>React JS</p>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-next reveal">
                    <div class="portfolio-wrap">
                    <img
                        src={EcoletaImg}
                        class="img-fluid"
                        alt=""
                    />
                    <div class="portfolio-links">
                    </div>
                    <div class="portfolio-info">
                        <h4>Ecoleta</h4>
                        <p>React JS</p>
                    </div>
                    </div>
                </div>

                </div>
            </div>
        </section>
    )
}