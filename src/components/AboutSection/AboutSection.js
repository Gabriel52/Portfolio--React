import './styles.css';
import WebDeveloperImg from '../../assets/webDeveloper.gif';
import { useTranslation } from 'react-i18next';

export const AboutSection = () => {
    const { t: translate } = useTranslation();

    return (
        <>
            <section id="about" className="about reveal">
                <div className="container about_container">
                    <div className="about_content sentinel reveal">
                        <div
                            className="about_content-img"
                        >
                            <img src={WebDeveloperImg} alt="gif demonstrativo" loading="lazy" decoding="async" />
                        </div>
                        <div className="about_content-phrase">
                        <h3 data-aos="fade-up">{translate('aboutMe.title')}</h3>
                        <div className="about_content-phrase-typography" >
                            <p data-aos="fade-up" data-aos-delay="90">
                                {translate('aboutMe.firstSentence')}
                            </p>
                            <p data-aos="fade-up" data-aos-delay="90">
                                {translate('aboutMe.secondSentence')}
                            </p>

                            <p data-aos="fade-up" data-aos-delay="90">
                                {translate('aboutMe.thirdSentence')}
                            </p>

                            <p data-aos="fade-up" data-aos-delay="90">
                            <strong
                                >React, Next, SASS, Styled-Components, JavaScript, Cypress, Hotjar
                                Google Analytics, Redux, Sagas, Context api, Git e Figma.
                            </strong>
                            </p>

                            <p data-aos="fade-up" data-aos-delay="10">
                            <a
                                href={translate('aboutMe.linkMyResume')}
                                className="btn-get-cv"
                                target="_blank" rel="noreferrer"
                            >
                                {translate('aboutMe.resumeButton')}
                            </a>
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}