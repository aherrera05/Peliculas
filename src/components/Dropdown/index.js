import React,{Component} from 'react';
import { Dropdown } from "react-bootstrap";

class Menu extends Component {
    render(){
        return(
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
        );
    }
}

export default Menu; 