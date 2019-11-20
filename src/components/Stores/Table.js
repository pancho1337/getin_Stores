import React, { Component} from 'react';
import Header from './Head.js';
import Footer from './Foot.js';
import Body from './Body.js';

const table = props => (

    <table className="table">
      <Header />
      <Body />
      <Footer />
    </table>
);
export default table;
