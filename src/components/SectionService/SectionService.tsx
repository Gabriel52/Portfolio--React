import { useTranslation } from 'react-i18next';

import './styles.css';

interface TechnologyItem {
  id: string;
  name: string;
  description: string;
}

export const SectionService: React.FC = () => {
  const { t: translate } = useTranslation();
  const technologiesList: TechnologyItem[] = (translate("technologies.listTechnologies") ?? []) as TechnologyItem[];

  return (
    <section id="services" className="services">
      <div className="container service">
        <div className="section-title reveal" data-aos="fade-up">
          <h2>{translate('technologies.title')}</h2>
          <p>{translate('technologies.subtitle')}</p>
        </div>

        <div className="service_content-card">
          {technologiesList.map((technologiesItem) => (
            <div
              className="align-items-stretch reveal"
              key={technologiesItem.id}
            >
              <div className="icon-box">
                <a target="_blank" href="https://nextjs.org/" rel="noreferrer">
                  <div className="icon"><i className="fab fa-react"></i></div>
                  <h4 className="title">
                    {technologiesItem.name}
                  </h4>
                  <p className="description">
                    {technologiesItem.description}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
