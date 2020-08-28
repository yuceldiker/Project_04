import React, { Component, Suspense } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'

import { withTranslation } from 'react-i18next';

class Header extends Component {
    state = {}

    render() {
        const { t } = this.props;
        return (<div>
        <h1 className='heading-background'>YALÇIN</h1>
            <header>
                <h1>
                    <Fade bottom cascade>{t('Index.name')}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {t('Index.headerTagline1')}<br></br>{t('Index.headerTagline2')}<br></br>
            {t('Index.headerTagline3')}
               <br></br>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >{t('Contact.2')}</a></button>
                </p>
            </Fade>



        </div>);
    }
}

const MyComponent = withTranslation()(Header);

// i18n translations might still be loaded by the xhr backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}