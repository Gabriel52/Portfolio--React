import './styles.css'

export const ContactServices = () => {
    
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
                <h2>Contatos</h2>
                <p>Entre em contato para começarmos</p>
            </div>
        
            <div class="contact__content">
                <div
                class="col-lg-5 d-flex align-items-stretch justify-content-center"
                data-aos="fade-up"
                data-aos-delay="100"
                >
                <div class="info reveal">
                    <div class="address">
                    <i class="fas fa-map-marked-alt"></i>
                    <h4>Localização:</h4>
                    <p>Embu das Artes - SP, Brasil</p>
                    </div>
        
                    <div class="email">
                    <i class="far fa-envelope"></i>
                    <h4>Email:</h4>
                    <p>gabrielbrune52@gmail.com</p>
                    </div>
        
                    <div class="phone">
                    <a target="_blank" href>
                        <i class="fab fa-whatsapp" />
                    </a>
                    <h4>Telefone:</h4>
                    <p>(11) 96018-8549</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}