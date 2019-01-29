import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          movie: [],
          favs:[],
          error: false
        };
      };
    
      // calling data from API
      async componentDidMount() {
        try { 
            const movie_id = Object.values(this.props.match.params);
            const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=756e1622851086c3d011b8461693b962`;
            this.setState({loading: true, error: false });
            const response = await fetch(url);
            const responseJson = await response.json();
            const movie = responseJson;
            console.log(movie)
            this.setState({movie, loading: false, error: false });
        } catch(e) {
            this.setState({ loading: false, error: true })
        }
      };

      // Saving Favs
  saveFavs = (movie) => {
    const { favs} = this.state;
    const favorite= {
      id: movie.id,
      title: movie.title,
    }
    let allMovies = JSON.parse(localStorage.getItem('favs-movies')) || [];
    let repeated = allMovies.filter(function(movie){ return movie.id === favorite.id}).length;
    if (!repeated){
        this.setState({favs});
        allMovies.push(favorite);
        localStorage.setItem("favs-movies", JSON.stringify(allMovies));
    } else { alert('Esta película ya está en tus favoritos :)')};
  }
 // Render
   render() {
    const { movie, loading, error } = this.state;
        return (
            <div>
                {!loading &&  !error && movie.id &&
                <div className="col-xs-12 col-sm-3 col-md-4 col-lg-4 col-xl-4 float-left mx-auto my-2 p-2 text-left">
                    <img className="img-fluid img-thumbnail rounded " alt="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                    <h5> {movie.title}</h5>
                    <p>Nota: {movie.vote_average}</p>
                    <button onClick={() => this.saveFavs(movie)}>Agregar a favoritos</button>
                    <Link to="/">Ir al Inicio</Link>
                    </div>
               }
            {loading && <p>Cargando información...</p> }
            {!loading && !error && !movie.id && <h2>No hay información disponible</h2>}
            {!loading && error && <h2>Ocurrió un error</h2>}
            </div>
        )
    };
};

export default Single;