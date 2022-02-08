import ShowCaseImg from '../../assets/web-developer.svg'
import './styles.css'

export const ShowCase = () => {
    return (
        <div className="show-case">
            <div className="show-case__logo-mobile">
                <img src={ShowCaseImg} alt=""/>
            </div>
            <div className="show-case__presentation">
                <h1 className="show-case__presentation-title">
                    Prazer,
                </h1>
                <h1 className="show-case__presentation-title">
                    Eu sou o Gabriel!
                </h1>
                <p className="show-case__presentation-occupation">Desenvolvedor Front-end</p>
                <button className="show-case__presentation-button">
                    <a className="show-case__presentation-button-link" href="https://mywhats.net/brune" target="_blank" rel="noreferrer">
                        Vamos conversar?!
                    </a>
                </button>
            </div>
            <div className="show-case__logo">
                <img src={ShowCaseImg} alt=""/>
            </div>
        </div>  
    )
}