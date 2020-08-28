import React, { Component, Suspense } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

import { withTranslation } from 'react-i18next';
// import Flip from 'react-reveal/Flip';

class About extends Component {
  state = {};
  render() {
    const { t } = this.props;
    return (
      <div className="about">
        <div className="about-content">
          <h1>
            <Fade left cascade>
              {t('About.1')}
            </Fade>
          </h1>
          <Fade left>
            <p>{t('Index.abouttext')}</p>
          </Fade>
          <br />
        </div>
        {data.ShowAboutImage ? (
          <img
            src={require('../images/yalcin_s.jpeg')}
            alt="about iamge"
            className="portrait"
          ></img>
        ) : null}
      </div>
    );
  }
}

const MyComponent = withTranslation()(About);

// i18n translations might still be loaded by the xhr backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
