import React, { Component } from 'react';
import './styles.css';
import Navbar from '../../components/navbar/index';

import Ranked from '../../components/ranked/index';
import Premiere from '../../components/premiere/index';
// import Search from '../../components/search';
// import Favs from '../../components/favs/index';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container-flex">
           <Navbar />     
            <Ranked />
            <Premiere />          
        </div>
      </div>
    );
  }
};

export default Home;

