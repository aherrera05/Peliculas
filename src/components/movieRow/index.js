import React,{Component} from 'react';

// Movie card
class MovieRow extends Component {
    render(){
        return(
            <div className="col-xs-12 col-sm-4 col-md-1 col-lg-1 col-xl-1 float-left mx-auto my-2 p-2 text-left" key={this.props.movie.id}>
                <img className="img-fluid img-thumbnail rounded " alt="poster" src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}/>
                <h5> {this.props.movie.title}</h5>
                <p>Nota: {this.props.movie.vote_average}</p>
            </div>
        )
    };
}

export default MovieRow;