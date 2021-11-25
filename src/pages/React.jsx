import React from 'react';
import ReactCards from '../components/ReactCards';

import Navs from '../components/Nav';
import '../styles/generic.css';
import '../styles/style.css';

function Reactpage() {
  return (
    <div className="page">
      <h1 className="large-header">React</h1>
      <Navs />
      <ReactCards />
    </div>
  );
}
export default Reactpage;
