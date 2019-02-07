import React,{Component} from 'react';
import { Dropdown } from "react-bootstrap";
// Navbar Component
class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-expand-xl navbar-dark bg-danger fixed-top">
              <div className="container">
                <a className="navbar-brand" href="/#top">React Movies</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="/#top"><i className="fas fa-home"></i> Inicio</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#premiere"><i className="fas fa-ticket-alt"></i> Estrenos</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#ranked"><i className="fas fa-medal"></i> Más populares</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#favs"><i className="fas fa-star"></i> Favoritas</a>
                    </li>
                    <li>
                    <Dropdown key={this.props.genres.id}>
                      <Dropdown.Toggle variant="danger" id="dropdown-basic">
                          Géneros
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                          {this.props.genres.map(genre=> (
                          <Dropdown.Item eventKey={genre.id}  key={genre.id} >
                              {genre.name}
                          </Dropdown.Item>
                          ))}
                      </Dropdown.Menu>
                  </Dropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>        
        )
    };
};
export default Navbar;

