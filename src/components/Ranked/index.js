import React,{Component} from 'react';
import MovieRow from '../MovieRow/index';
// API
const url = 'https://api.themoviedb.org/3/trending/all/day?&api_key=756e1622851086c3d011b8461693b962&language=es-ES';
// Ranked Component
 class Ranked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movies: [],
      error: false
    };
  };
// Calling movie data
  async componentDidMount() {
    try {
      this.setState({loading: true, error: false });
      const response = await fetch(url);
      const responseJson = await response.json();
      const movies = responseJson.results.slice(0,6);
      this.setState({movies, loading: false, error: false });
    } catch(e) {
      this.setState({ loading: false, error: true })
    }
  };
  // Render
   render() {
    const { movies, loading, error } = this.state;
     return (
       <div className="col-12 anchor" id="ranked">
          <h1>Películas más populares</h1>
          <div className="row">
              {!loading && movies.map(movie =>
               <MovieRow movie ={movie} key={movie.id}/>
              )}
              {loading && 
              <div className="col-12 text-center">
                  <p>Cargando información...</p>
                </div>
              }
              {!loading && !error && !movies.length && 
                <div className="col-12 text-center">
                  <h2>No hay información disponible.</h2>
                </div>
              }
              {!loading && error && 
              <div className="col-12 text-center">
                <h2>Ocurrió un error.</h2>
              </div>
            }
          </div>
       </div>
     );
   }
 };
 export default Ranked;