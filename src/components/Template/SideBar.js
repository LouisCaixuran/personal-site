import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Xuran Cai</h2>
        <p><a href="mailto:louiscaixuran@outlook.com">louiscaixuran@outlook.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I am a research postgraduate student in HKUST alpacas research group,
        supervised by professor Amir Goharshady. I am interested in progaming analysis,
        blockchain system, and parameterized algorithm.
        I am currently working on static program analysis.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
