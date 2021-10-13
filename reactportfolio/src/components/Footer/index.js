import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <div className="footer">
    <a href="https://github.com/ehajek">
      <FontAwesomeIcon icon={['fab', 'github']} size={['2x']} />
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/eddie-hajek-02b77729/">
      <FontAwesomeIcon icon={['fab', 'linkedin']} size={['2x']} />
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/15901024/ehajek">
      <FontAwesomeIcon icon={['fab', 'stack-overflow']} size={['2x']} />
    </a>
    &nbsp;
  </div>
);

export default Footer;