import React, { Component, Suspense } from 'react';
// import Project from './project';
import Fade from 'react-reveal/Fade';
// import data from '../yourdata';

import './work.css';

import projects01 from '../images/projects_01.jpg';
import projects02 from '../images/projects_02.jpg';
import projects03 from '../images/projects_03.jpg';
import projects04 from '../images/projects_04.jpg';

import { withTranslation } from 'react-i18next';

class Work extends Component {
  state = {};
  render() {
    const { t } = this.props;
    return (
      <div className="works">
        <h1 align="left"/*</div>className="heading"*/>
          <Fade bottom cascade>
            {t('Projects.1')}
          </Fade>
        </h1>
        <div class="wrapper" /*className="work-content"*/>
          <div class="cols">
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{ backgroundImage: `url(${projects01})` }}
                >
                  <div class="inner">
                    <p>{t('Projects.title.0')}</p>
                    {/* <span></span> */}
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      {t('Projects.service.0')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{ backgroundImage: `url(${projects02})` }}
                >
                  <div class="inner">
                  <p>{t('Projects.title.1')}</p>
                    {/* <span></span> */}
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      {t('Projects.service.1')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{ backgroundImage: `url(${projects03})` }}
                >
                  <div class="inner">
                  <p>{t('Projects.title.2')}</p>
                    {/* <span></span> */}
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      {t('Projects.service.2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{ backgroundImage: `url(${projects04})` }}
                >
                  <div class="inner">
                  <p>{t('Projects.title.3')}</p>
                    {/* <span></span> */}
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      {t('Projects.service.3')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const MyComponent = withTranslation()(Work);

// i18n translations might still be loaded by the xhr backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
