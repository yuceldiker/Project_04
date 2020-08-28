import React, { Component, Suspense } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

function handleClick(lang) {
  i18next.changeLanguage(lang);
}

class Navbar extends Component {
  state = {};
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    const { t } = this.props;
    return (
      <nav>
        <ul>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="homw"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={this.scrollToTop}
            >
              {t('Navbar.1')}
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {t('Navbar.2')}
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="Career"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {t('Navbar.3')}
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="works"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {t('Navbar.4')}
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {t('Navbar.5')}
            </Link>
          </li>
          <li
            className="link"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="btn default" onClick={() => handleClick('en')}>
              English
            </button>
            <button className="btn default" onClick={() => handleClick('tr')}>
              Türkçe
            </button>
            <button className="btn default" onClick={() => handleClick('ar')}>
              العربية
            </button>
            <br />
            <br />
          </li>
        </ul>
      </nav>
    );
  }
}

const MyComponent = withTranslation()(Navbar);

// i18n translations might still be loaded by the xhr backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
