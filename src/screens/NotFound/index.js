import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="col-12 text-center m-8">
    <h1>Lo sentimos. </h1>
    <p>No encontramos esta página :(</p>
    <Link to="/">Aquí puedes volver al Inicio.</Link>
  </div>
);

export default NotFound;