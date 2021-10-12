import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <div className="footer">
    <FontAwesomeIcon icon={['fab', 'github']} size={['2x']} /> &nbsp;
    <FontAwesomeIcon icon={['fab', 'linkedin']} size={['2x']} /> &nbsp;
    <FontAwesomeIcon icon={['fab', 'stack-overflow']} size={['2x']} /> &nbsp;
  </div>
);

export default Footer;