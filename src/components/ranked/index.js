import React,{Component} from 'react';
import MovieRow from '../movieRow/index';

const url = 'https://api.themoviedb.org/3/movie/top_rated?&api_key=756e1622851086c3d011b8461693b962&page=1';

 class Ranked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movies: [],
      error: false
    };
  };

  async componentDidMount() {
    try {
      this.setState({loading: true, error: false });
      const response = await fetch(url);
      const responseJson = await response.json();
      const movies = responseJson.results.slice(0,12);
      this.setState({movies, loading: false, error: false });
    } catch(e) {
      this.setState({ loading: false, error: true })
    }
  };

   render() {
    const { movies, loading, error } = this.state;
     return (
       <div className="col-12">
         <h1>Películas mejor rankeadas</h1>
        {!loading && movies.map(movie =>
          <MovieRow movie ={movie} />
        )}
        {loading && <p>Cargando información...</p> }
        {!loading && !error && !movies.length && <h2>No hay información disponible</h2>}
        {!loading && error && <h2>Ocurrió un error</h2>}
       </div>
     );
   }
 };
 export default Ranked;