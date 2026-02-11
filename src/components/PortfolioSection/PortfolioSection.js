import './styles.css';
import { useTranslation } from 'react-i18next';
import { FaGithub } from "react-icons/fa";
import { IoIosDesktop } from "react-icons/io";

import AluraQuizImg from '../../assets/screen-alura.png';
import BeTheHeroImg from '../../assets/screen-be-the-hero.png';
import ProjectClockImg from '../../assets/screen-relogio.png';
import ProffyImg from '../../assets/screen-proffy.png';
import EcoletaImg from '../../assets/screen-ecoleta.png';

export const PortfolioSection = () => {
    const { t: translate } = useTranslation();

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-title reveal" data-aos="fade-up">
                <h2>{translate('projects.title')}</h2>
                <p>{translate('projects.subtitle')}</p>
                </div>
                <div
                className="portfolio-container"
                data-aos="fade-up"
                data-aos-delay="200"
                >
                <div className="col-lg-4 col-md-6 portfolio-item filter-react reveal">
                    <div className="portfolio-wrap">
                    <img
                        src={AluraQuizImg}
                        className="img-fluid"
                        alt="Alura Quiz - Git Hub"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="portfolio-links">
                        <a
                        href="https://github.com/Gabriel52/imersao_alura"
                        className="venobox"
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
                    <div className="portfolio-info">
                        <h4>Alura Quiz</h4>
                        <p>Next JS</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-react reveal">
                    <div className="portfolio-wrap">
                    <img
                        src={ProjectClockImg}
                        className="img-fluid"
                        alt="Hora do dia project"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="portfolio-links">
                        <a
                        href="https://github.com/Gabriel52/Projetos_JS/tree/master/Relogio"
                        title="Hora do dia"
                        target="_blank" rel="noreferrer"
                        ><FaGithub /></a>
                    </div>
                    <div className="portfolio-info">
                        <h4>Hora do dia</h4>
                        <p>Javascript</p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-html reveal">
                    <div className="portfolio-wrap">
                    <img
                        src={BeTheHeroImg}
                        className="img-fluid"
                        alt="Be The Hero project"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="portfolio-links">
                        <a
                        href="https://github.com/Gabriel52/Be-The-Hero"
                        data-gall="portfolioGallery"
                        className="venobox"
                        title="Be the hero"
                        ><FaGithub /></a>
                    </div>
                    <div className="portfolio-info">
                        <h4>Be The Hero</h4>
                        <p>React JS</p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-html reveal">
                    <div className="portfolio-wrap">
                    <img
                        src={ProffyImg}
                        className="img-fluid"
                        alt="Proffy project"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="portfolio-links">
                        <a
                        href="https://github.com/Gabriel52/Proffy"
                        data-gall="portfolioGallery"
                        className="venobox"
                        title="Proffy - Git Hub"
                        ><IoIosDesktop /></a>
                        <a
                        href="https://stupefied-turing-6a35f2.netlify.app/"
                        title="Proffy - Hospedagem"
                        target="_blank" rel="noreferrer"
                        ><FaGithub /></a>
                    </div>
                    <div className="portfolio-info">
                        <h4>Proffy</h4>
                        <p>React JS</p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-next reveal">
                    <div className="portfolio-wrap">
                    <img
                        src={EcoletaImg}
                        className="img-fluid"
                        alt="Ecoleta project"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="portfolio-links">
                    </div>
                    <div className="portfolio-info">
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