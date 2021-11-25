import React from 'react';
import FrontEndCards from '../components/FrontEndCards';

import Navs from '../components/Nav';
import '../styles/generic.css';
import '../styles/style.css';

function FrontEnd() {
  return (
    <div className="page">
      <h1 className="large-header">Front End</h1>
      <Navs />
      <FrontEndCards />
    </div>
  );
}
export default FrontEnd;
