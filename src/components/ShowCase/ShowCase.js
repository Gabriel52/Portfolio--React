import { useTranslation } from 'react-i18next';
import ShowCaseImg from '../../assets/web-developer.svg'
import './styles.css'

export const ShowCase = () => {
    const { t: translate } = useTranslation();

    return (
        <div className="show-case">
            <div className="show-case__logo-mobile">
                <img src={ShowCaseImg} alt=""/>
            </div>
            <div className="show-case__presentation">
                <h1 className="show-case__presentation-title">
                    {translate('home.presentation')}
                </h1>
                <h1 className="show-case__presentation-title">
                    {translate('home.whoIsIt')}
                </h1>
                <p className="show-case__presentation-occupation">{translate('home.occupation')}</p>
                <button className="show-case__presentation-button">
                    <a 
                        className="show-case__presentation-button-link" 
                        href={translate('home.invitationLink')}
                        target="_blank" 
                        rel="noreferrer"
                    >
                        {translate('home.invite')}!
                    </a>
                </button>
            </div>
            <div className="show-case__logo">
                <img src={ShowCaseImg} alt=""/>
            </div>
        </div>  
    )
}