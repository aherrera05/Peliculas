import React, { Component } from 'react';
import './styles.css';
import Navbar from '../../components/Navbar/index';
import Premiere from '../../components/Premiere/index';
import Ranked from '../../components/Ranked/index';
// import Favs from '../../components/Favs/index';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container-flex">
           <Navbar />     
          <Premiere /> 
          <Ranked />        
        </div>
      </div>
    );
  }
};

export default Home;

