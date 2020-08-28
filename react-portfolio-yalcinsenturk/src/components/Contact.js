import React, { Component, Suspense } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

import { withTranslation } from 'react-i18next';

class Contact extends Component {
  state = {};
  render() {
    const { t } = this.props;
    return (
      <div>
        <h1>
          <Fade left cascade>
            {' '}
            {t('Contact.1')}
          </Fade>
        </h1>
        <Fade bottom>
          <div className="contact-content">
            <h1>
              {t('Contact.3')}
              <br></br>
              <span className="amazing-color">{t('Contact.4')}</span>
              <span>{t('Contact.5')}</span>
              <span className="amazing-color">{t('Contact.6')}</span>
              <span>{t('Contact.7')}</span>
              <span className="amazing-color">{t('Contact.8')}</span>
            </h1>
            <a href={`mailto:${data.contactEmail}`} className="email">
              {data.contactEmail}
            </a>
            <ul>
              {data.social.map((link, index) => (
                <li key={index}>
                  <a target="_blank" rel="noopener noreferrer" href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Fade>

        <span className="footer">
          Made by <a href="mailto: yuceldiker@gmail.com/">Yücel Diker</a>
        </span>
      </div>
    );
  }
}

const MyComponent = withTranslation()(Contact);

// i18n translations might still be loaded by the xhr backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
