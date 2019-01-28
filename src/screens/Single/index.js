import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Single extends Component {
   render() {
        return (
            <div>
                <Link to="/">Ir al Inicio</Link>
                <p>hola necesito el id de peli para funcionar</p>
            </div>
        )
    }
}

export default Single;