import React, { Component } from 'react';
import './styles.css';
// importing components
import Navbar from '../../components/Navbar/index';
import Premiere from '../../components/Premiere/index';
import Ranked from '../../components/Ranked/index';
import Favs from '../../components/Favs/index';
import Footer from '../../components/Footer/index';
// Home Component
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container-flex">
           <Navbar />   
          <Premiere /> 
          <Ranked /> 
          <Favs />    
        </div>
        <Footer />   
      </div>
    );
  }
};
export default Home;

