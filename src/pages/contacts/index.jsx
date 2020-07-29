import React from 'react';
import { Link } from 'react-router-dom';
import { contacts } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faEgg,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';

const Contacts = () => {
  return (
    <section>
      <h2>Contacts</h2>
      <address className="info">
        <FontAwesomeIcon icon={faEgg} size="1x" />
        <Link to={contacts.hrefs[0]} className="m-2">
          {contacts.phones[0]}
        </Link>
      </address>
      <address className="info">
        <FontAwesomeIcon icon={faMobileAlt} size="1x" />
        <Link to={contacts.hrefs[1]} className="m-2">
          {contacts.phones[1]}
        </Link>
      </address>
      <address className="info">
        <FontAwesomeIcon icon={faEnvelope} size="1x" />
        <Link to={contacts.mail.mailto} className="m-2">
          {contacts.mail.email}
        </Link>
      </address>
    </section>
  );
};

export default Contacts;
