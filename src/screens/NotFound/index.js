import React from 'react';
// importing components
import Navbar from '../../components/Navbar/index';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/index';
// Not Found Component
const NotFound = () => (
  <div>
    <Navbar />
      <div className="col-12 text-center m-8">
          <h1>Lo sentimos. </h1>
          <p>No encontramos esta página.</p>
          <Link to="/">Aquí puedes volver al Inicio.</Link>
      </div>
      <Footer />
  </div>
);

export default NotFound;