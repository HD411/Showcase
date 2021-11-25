import React from 'react';
import JSCards from '../components/jscards';

import Navs from '../components/Nav';
import '../styles/generic.css';
import '../styles/style.css';

function JavaScript() {
  return (
    <div className="page">
      <h1 className="large-header">JavaScript</h1>
      <Navs />
      <JSCards />
    </div>
  );
}
export default JavaScript;
