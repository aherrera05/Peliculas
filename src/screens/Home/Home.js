import React, { Component } from 'react';
import './styles.css';
// importing components
import Navbar from '../../components/Navbar/index';
import MovieRow from '../../components/MovieRow/index';
import Favs from '../../components/Favs/index';
import Footer from '../../components/Footer/index';
// API
const urlPremier= 'https://api.themoviedb.org/3/movie/upcoming?api_key=756e1622851086c3d011b8461693b962&language=es-ES';
const urlRanked = 'https://api.themoviedb.org/3/trending/all/day?&api_key=756e1622851086c3d011b8461693b962&language=es-ES';

// Home Component
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      moviesP: [],
      moviesR: [],
      moviesF: [],
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
      const moviesP = responseJsonP.results.slice(0,6);
      // fetch Ranked
      const responseR = await fetch(urlRanked);
      const responseJsonR = await responseR.json();
      const moviesR = responseJsonR.results.slice(0,6);
      //States
      this.setState({moviesP, moviesR, loading: false, error: false });
    } catch(e) {
      this.setState({ loading: false, error: true })
    }
  };
  render() {
  const { moviesP, moviesR, loading, error } = this.state;
    return (
      <div className="Home">
        <div className="container-flex">
           <Navbar />   
           <div className="col-12 anchor" id="premiere">
              <h1>Estrenos</h1>
              <div className="row">
                    {!loading && moviesP.map(movie => 
                    <MovieRow movie ={movie}  key={movie.id}/>
                  )}
                  {loading && 
                      <div className="col-12 text-center">
                          <p>Cargando información...</p>
                      </div>
                    }
                    {!loading && !error && !moviesP.length&& 
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
            <div className="col-12 anchor" id="ranked">
              <h1>Películas más populares</h1>
              <div className="row">
                  {!loading && moviesR.map(movie =>
                  <MovieRow movie ={movie} key={movie.id}/>
                  )}
                  {loading && 
                  <div className="col-12 text-center">
                      <p>Cargando información...</p>
                    </div>
                  }
                  {!loading && !error && !moviesR.length && 
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
          <Favs />    
        </div>
        <Footer />   
      </div>
    );
  }
};
export default Home;

