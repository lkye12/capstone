import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
    <ul classname='nav-link'>
      <link to="/about">
      <li>about</link>
      <li>me</li>
      </link>
      </ul></nav>
  )
  }

export default links => `
${links.map(link => `<li><a href="#">${link}</a></li>`).join("")}
`;
