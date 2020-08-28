import React, { Component, Suspense } from 'react';
import Fade from 'react-reveal/Fade';

import { withTranslation } from 'react-i18next';
import Flip from 'react-reveal/Flip';

class Career extends Component {
  state = {};
  render() {
    const { t } = this.props;
    return (
      <div className="about">
        <div className="about-content">
          <Flip top>
            <h1 align="left">{t('Career.experience')}</h1>
          </Flip>
          <Fade bottom>
            <p>{t('Career.position.0')}</p>
          </Fade>
          <Fade bottom>
            <p>{t('Career.company.0')}</p>
          </Fade>
          <Fade bottom>
            <p>{t('Career.timeperiod.0')}</p>
          </Fade>
          <Fade bottom>
            <p>{t('Career.description.0')}</p>
          </Fade>
          <br />
          <hr />
          <br />
          <Flip top>
            <p>{t('Career.position.1')}</p>
          </Flip>
          <Flip top>
            <p>{t('Career.company.1')}</p>
          </Flip>
          <Flip top>
            <p>{t('Career.timeperiod.1')}</p>
          </Flip>
          <Flip top>
            <p>{t('Career.description.1')}</p>
          </Flip>
          <br />
          <hr />
          <br />
          <Fade left>
            <p>{t('Career.position.2')}</p>
          </Fade>
          <Fade left>
            <p>{t('Career.company.2')}</p>
          </Fade>
          <Fade left>
            <p>{t('Career.timeperiod.2')}</p>
          </Fade>
          <Fade left>
            <p>{t('Career.description.2')}</p>
          </Fade>
          <br />
          <hr />
          <br />
          <Fade right>
            <p>{t('Career.position.3')}</p>
          </Fade>
          <Fade right>
            <p>{t('Career.company.3')}</p>
          </Fade>
          <Fade right>
            <p>{t('Career.timeperiod.3')}</p>
          </Fade>
          <Fade right>
            <p>{t('Career.description.3')}</p>
          </Fade>
          <br />
          <hr />
          <br />
          <Fade bottom>
            <p>{t('Career.position.4')}</p>
          </Fade>
          <Fade bottom>
            <p>{t('Career.company.4')}</p>
          </Fade>
          <Fade bottom>
            <p>{t('Career.timeperiod.4')}</p>
          </Fade>
          <Fade bottom>
            <p>{t('Career.description.4')}</p>
          </Fade>
        </div>
      </div>
    );
  }
}

const MyComponent = withTranslation()(Career);

// i18n translations might still be loaded by the xhr backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
