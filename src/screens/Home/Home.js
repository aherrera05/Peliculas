import React, { Component } from 'react';
import './styles.css';
// importing components
import Navbar from '../../components/Navbar/index';
import MovieRow from '../../components/MovieRow/index';
import Favs from '../../components/Favs/index';
import Footer from '../../components/Footer/index';
// API
const urlPremier= 'https://api.themoviedb.org/3/movie/upcoming?api_key=756e1622851086c3d011b8461693b962&language=es-ES';
const urlTrend = 'https://api.themoviedb.org/3/trending/all/day?&api_key=756e1622851086c3d011b8461693b962&language=es-ES';
const urlGenres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=756e1622851086c3d011b8461693b962&language=es-ES';
// Home Component
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      moviesP: [],
      moviesT: [],
      moviesF: [],
      genres: [],
      filter:[],
      error: false,
    };
  };

// Calling the movie data
  async componentDidMount() {
    try {
      this.setState({loading: true, error: false });
      // fetch Premiere
      const responseP = await fetch(urlPremier);
      const responseJsonP = await responseP.json();
      const moviesP = responseJsonP.results.slice(0,12);
      // fetch Trend
      const responseT = await fetch(urlTrend);
      const responseJsonT= await responseT.json();
      const moviesT = responseJsonT.results.slice(0,12); 
      //States
      this.setState({moviesP, moviesT, loading: false, error: false });
    } catch(e) {
      this.setState({ loading: false, error: true })
    }
  };
  // Fetch Genres
  fetchGenres() {
    fetch(urlGenres)
      .then(response => response.json())
      .then(json => this.setState({ genres: json.genres }));
  };
  componentWillMount(){
    this.fetchGenres();
  };
  // Render
 render() {
  const { moviesP, moviesT, genres, loading, error } = this.state;
    return (
      <div className="Home">
        <div className="container-flex">
          <Navbar genres={genres}  /> 
          <div className="col-12 anchor" id="premiere">
              <h1>Estrenos</h1>
              <div className="row">
                <div className="col-12 text-left">
                </div>
                    {!loading && moviesP.map(movie => <MovieRow movie ={movie} />)}
                    {loading && <div className="col-12 text-center"> <p>Cargando información...</p> </div> }
                    {!loading && !error && !moviesP.length&& <div className="col-12 text-center"> <h2>No hay información disponible.</h2></div> }
                    {!loading && error && <div className="col-12 text-center"> <h2>Ocurrió un error.</h2></div> }
              </div>
            </div>
          <div className="col-12 anchor" id="Trend">
              <h1>Películas más populares</h1>
              <div className="row">
                  {!loading && moviesT.map(movie =><MovieRow movie ={movie} key={movie.id}/> )}
                  {loading && <div className="col-12 text-center"> <p>Cargando información...</p> </div> }
                  {!loading && !error && !moviesT.length &&  <div className="col-12 text-center"><h2>No hay información disponible.</h2> </div> }
                  {!loading && error &&  <div className="col-12 text-center"> <h2>Ocurrió un error.</h2> </div>}
              </div>
          </div>
          <Favs />    
        </div>
        <Footer />   
      </div>
    );
  }
};
export default Home;

