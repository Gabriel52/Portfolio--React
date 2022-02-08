import './styles.css'

export const SectionService = ()=> {
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
        <section id="services" className="services">
            <div className="container service">
            <div className="section-title reveal" data-aos="fade-up">
                <h2>Tecnologias</h2>
                <p>Confira as tecnologias que mais utilizo</p>
            </div>

            <div className="service_content-card">
                <div
                className="align-items-stretch reveal"
                >
                <div className="icon-box">
                    <a target="_blank" href="https://nextjs.org/" rel="noreferrer">
                    <div className="icon"><i className="fab fa-react"></i></div>
                    <h4 className="title">
                        Next JS
                    </h4>
                    <p className="description">
                        Permite o desenvolvimento de 
                        aplicações React tanto front-end quanto back-end.
                    </p>
                    </a>
                </div>
                </div>

                <div
                className="align-items-stretch reveal"
                >
                <div className="icon-box">
                    <a target="_blank" href="https://styled-components.com/" rel="noreferrer">
                    <div className="icon"><i className="fab fa-css3-alt"></i></div>
                    <h4 className="title"><a>Typescript</a></h4>
                    <p className="description">
                        Trata-se de uma biblioteca (lib) que nos permite escrever
                        códigos CSS dentro do JavaScript
                    </p>
                    </a>
                </div>
                </div>

                <div
                className="align-items-stretch reveal"
                data-aos="zoom-in"
                data-aos-delay="200"
                >
                <div className="icon-box">
                    <a target="_blank" href="https://sass-lang.com/" rel="noreferrer">
                    <div className="icon"><i className="fab fa-sass"></i></div>
                    <h4 className="title">SASS</h4>
                    <p className="description">
                        Com ele podemos dar "super poderes" ao nosso CSS
                    </p>
                    </a>
                </div>
                </div>

                <div
                className="align-items-stretch reveal"
                data-aos="zoom-in"
                data-aos-delay="100"
                >
                <div className="icon-box">
                    <a target="_blank" href="https://devdocs.io/javascript/" rel="noreferrer">
                    <div className="icon"><i className="fab fa-js"></i></div>
                    <h4 className="title">JavaScript</h4>
                    <p className="description">
                        Uma das linguagens de programação mais utilizadas hoje em dia
                    </p>
                    </a>
                </div>
                </div>

                <div
                className="align-items-stretch reveal"
                data-aos="zoom-in"
                data-aos-delay="300"
                >
                <div className="icon-box">
                    <a target="_blank" href="https://pt-br.reactjs.org/docs/getting-started.html" rel="noreferrer">
                    <div className="icon"><i className="fab fa-react"></i></div>
                    <h4 className="title">React JS</h4>
                    <p className="description">
                        Biblioteca usada para construir interface de usuário (UI)
                    </p>
                    </a>
                </div>
                </div>

                <div
                className="align-items-stretch reveal"
                >
                <div className="icon-box">
                    <a target="_blank" href="https://reactnative.dev/docs/getting-started" rel="noreferrer">
                    <div className="icon"><i className="fab fa-react"></i></div>
                    <h4 className="title">React Native</h4>
                    <p className="description">
                        Framework para desenvolvimento de aplicativos para Android e
                        iOS de forma nativa
                    </p>
                    </a>
                </div>
                </div>

                <div
                className="align-items-stretch reveal"
                >
                    <div className="icon-box">
                        <a target="_blank" href="https://git-scm.com/docs/git/pt_BR" rel="noreferrer">
                        <div className="icon"><i className="fab fa-git-alt"></i></div>
                        <h4 className="title">Git</h4>
                        <p className="description">
                            É um sistema de controle de versões distribuído
                        </p>
                        </a>
                    </div>
                </div>

                <div
                className="align-items-stretch reveal"
                >
                    <div className="icon-box">
                        <a target="_blank" href="https://git-scm.com/docs/git/pt_BR" rel="noreferrer">
                        <div className="icon"><i className="fab fa-node"></i></div>
                        <h4 className="title">Node JS</h4>
                        <p className="description">
                            É uma plataforma em que é possível criar aplicações Javascript sem depender de um browser para a execução.
                        </p>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}