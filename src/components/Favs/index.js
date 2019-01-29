import React,{Component} from 'react';
import MovieRow from '../MovieRow/index';

// const url = "https://api.themoviedb.org/3/trending/all/day?&api_key=756e1622851086c3d011b8461693b962";

class Favs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movies: [],
      error: false
    };
  };
// get movies from local storage
  componentDidMount() {
    const movies = localStorage.getItem("favs-movies");
    if (movies) {
      this.setState({ movies: JSON.parse(movies) });
    }
  }
// rendere
   render() {
    const { movies, loading, error } = this.state;
     return (
      <div className="col-12" id="favs">
      <h1>Mis favoritas</h1>
      <div className="row">
          {!loading && movies.map(movie =>
           <MovieRow movie ={movie}  key={movie.id}/>
          )}
          {loading && <p>Cargando información...</p> }
          {!loading && !error && !movies.length && <h2>No hay información disponible</h2>}
          {!loading && error && <h2>Ocurrió un error</h2>}
      </div>
   </div>
     );
   }
 };

 export default Favs;