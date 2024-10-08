import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const ContactIcons = () => (
  <ul className="icons">
    {data.map((s) => (
      <li key={s.label}>
        <a aria-label="Save" href={s.link}>
          <FontAwesomeIcon icon={s.icon} />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
