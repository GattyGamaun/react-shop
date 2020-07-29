import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faEgg,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { contacts } from '../../data';
import './_style.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <address className="info">
          <FontAwesomeIcon icon={faEgg} size="1x" />
          <a href={contacts.hrefs[0]} className="m-2">
            {contacts.phones[0]}
          </a>
        </address>
        <address className="info">
          <FontAwesomeIcon icon={faMobileAlt} size="1x" />
          <a href={contacts.hrefs[1]} className="m-2">
            {contacts.phones[1]}
          </a>
        </address>
        <address className="info">
          <FontAwesomeIcon icon={faEnvelope} size="1x" />
          <a href={contacts.mail.mailto} className="m-2">
            {contacts.mail.email}
          </a>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
