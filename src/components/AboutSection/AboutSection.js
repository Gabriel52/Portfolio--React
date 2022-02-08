import './styles.css'
import WebDeveloperImg from '../../assets/webDeveloper.gif'
export const AboutSection = () => {

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
        <>
            <section id="about" className="about reveal">
                <div className="container about_container">
                    <div className="about_content sentinel reveal">
                        <div
                            className="about_content-img"
                        >
                            <img src={WebDeveloperImg} alt="gif demonstrativo"/>
                        </div>
                        <div className="about_content-phrase">
                        <h3 data-aos="fade-up">Sobre mim</h3>
                        <div className="about_content-phrase-typography" >
                            <p data-aos="fade-up" data-aos-delay="90">
                                Atualmente estou atuando como Desenvolvedor front-end React JS/Next JS.
                            </p>
                            <p data-aos="fade-up" data-aos-delay="90">
                                Cursando Ciência da Computação na Anhembi Morumbi, formado
                                em Desenvolvimento de Sistemas pela Etec de Embu.
                            </p>

                            <p data-aos="fade-up" data-aos-delay="90">
                                Em meu dia-a-dia utilizo estas tecnologias
                            </p>

                            <p data-aos="fade-up" data-aos-delay="90">
                            <strong
                                >React, Next, SASS, Styled-Components, JavaScript, Cypress, Hotjar
                                Google Analytics, Redux, Sagas, Context api, Git e Figma.
                            </strong>
                            </p>

                            <p data-aos="fade-up" data-aos-delay="10">
                            <a
                                href="https://drive.google.com/file/d/19E0j-auJzk7HD1xvrK_0rGLUQ1R_kjFu/view"
                                className="btn-get-cv"
                                target="_blank" rel="noreferrer"
                            >
                                Confira meu CV
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